import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CreateAnnouncement from "../pages/CreateAnnouncement";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ForgotPassword from "../pages/ForgotPassword";
import Layout from "./Layout";
import { ListAnnoucements } from "../pages/ListAnnouncements";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Layout isPrivate={false} component={<LandingPage />} />}
          exact
          path="/"
        />
        <Route
          element={<Layout isPrivate={false} component={<LogIn />} />}
          path="/login"
        />
        <Route
          element={<Layout isPrivate={false} component={<SignUp />} />}
          path="/signup"
        />
        <Route
          element={<Layout isPrivate={false} component={<ForgotPassword />} />}
          path="/forgotPassword"
        />
        <Route
          element={
            <Layout isPrivate={true} component={<CreateAnnouncement />} />
          }
          path="/newAnnouncement"
        />
        <Route
          element={<Layout isPrivate={true} component={<ListAnnoucements />} />}
          path="/announcements"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
