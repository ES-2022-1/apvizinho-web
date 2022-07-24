import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import CreateAnnouncement from "../pages/CreateAnnouncement";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ForgotPassword from "../pages/ForgotPassword";
// import Layout from "./Layout";
import { ListAnnoucements } from "../pages/ListAnnouncements";
import EditAnnouncement from "../pages/EditAnnouncement";
import { LoadAnnoucement } from "../pages/LoadAnnouncement";
import PrivateLayout from "../pages/_layouts/PrivateLayout";
import PublicLayout from "../pages/_layouts/PublicLayout";

const Router = () => {
  const routeElement = (isPrivate, Component) => {
    const access_token = localStorage.getItem("access_token");
    console.log(access_token);

    if (!access_token && isPrivate) {
      return <Navigate to="/login" />;
    }

    if (!!access_token && !isPrivate) {
      return <Navigate to="/announcements" />;
    }

    const Layout = isPrivate ? PrivateLayout : PublicLayout;

    return (
      <Layout>
        <Component />
      </Layout>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={routeElement(false, LandingPage)} exact path="/" />
        <Route element={routeElement(false, LogIn)} path="/login" />
        <Route element={routeElement(false, SignUp)} path="/signup" />
        <Route
          element={routeElement(false, ForgotPassword)}
          path="/forgotPassword"
        />
        <Route
          element={routeElement(true, CreateAnnouncement)}
          path="/newAnnouncement"
        />
        <Route
          element={routeElement(true, EditAnnouncement)}
          path="/editAnnouncement"
        />
        <Route
          element={routeElement(true, ListAnnoucements)}
          path="/announcements"
        />
        <Route
          element={routeElement(true, LoadAnnoucement)}
          path="/loadAnnouncement"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
