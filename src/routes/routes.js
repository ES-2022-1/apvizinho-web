import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import SignUp from "../pages/SignUp";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Layout isPrivate={false} component={<SignUp />} />}
          path="/signup"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;