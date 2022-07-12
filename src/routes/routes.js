import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CreateAnnouncement from "../pages/CreateAnnouncement";

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
        <Route
          element={
            <Layout isPrivate={true} component={<CreateAnnouncement />} />
          }
          path="/newAnnouncement"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
