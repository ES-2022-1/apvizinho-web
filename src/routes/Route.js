import React from "react";
import { Route as ReactDOMRoute, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate === !!user ? (
          <Component />
        ) : (
          <Navigate
            to={{
              pathname: isPrivate ? "/" : "/announcements",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Route;
