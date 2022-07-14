import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import SignUp from "../pages/SignUp";
import Announcement from "../pages/Announcement";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Layout isPrivate={false} component={<SignUp />} />}
          path="/signup"
        />
        <Route
          element={<Layout isPrivate={true} component={<Announcement />} />}
          path="/announcement"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
