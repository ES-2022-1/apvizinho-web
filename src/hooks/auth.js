import React from "react";
import { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@Apvizinho:token");
    const user = localStorage.getItem("@Apvizinho:user");

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/session/", {
      email,
      password,
    });

    const { access_token, user } = response.data;

    localStorage.setItem("@Apvizinho:token", access_token);
    localStorage.setItem("@Apvizinho:user", JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${access_token}`;

    setData({ user, token: access_token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Apvizinho:token");
    localStorage.removeItem("@Apvizinho:user");

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used withing an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
