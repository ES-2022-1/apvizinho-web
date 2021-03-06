import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import CreateAnnouncement from "../pages/CreateAnnouncement";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ForgotPassword from "../pages/ForgotPassword";
import { ListAnnouncements } from "../pages/ListAnnouncements";
import EditAnnouncement from "../pages/EditAnnouncement";
import { LoadAnnouncement } from "../pages/LoadAnnouncement";
import PrivateLayout from "../pages/_layouts/PrivateLayout";
import PublicLayout from "../pages/_layouts/PublicLayout";
import EditUser from "../pages/EditUser";

const Router = () => {
  const routeElement = (isPrivate, Component, title) => {
    const access_token = sessionStorage.getItem("access_token");
    console.log(access_token);

    if (!access_token && isPrivate) {
      return <Navigate to="/login" />;
    }

    if (!!access_token && !isPrivate) {
      return <Navigate to="/announcements" />;
    }

    if (!!access_token && !isPrivate) {
      return <Navigate to="/user" />;
    }

    const Layout = isPrivate ? PrivateLayout : PublicLayout;

    return (
      <Layout title={title}>
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
          element={routeElement(false, EditUser, "Editar user")}
          path="/editUser"
        />
        <Route
          element={routeElement(true, CreateAnnouncement, "Criar anúncio")}
          path="/newAnnouncement"
        />
        <Route
          element={routeElement(true, EditAnnouncement, "Editar anúncio")}
          path="/editAnnouncement"
        />
        <Route
          element={routeElement(true, ListAnnouncements)}
          path="/announcements"
        />
        <Route
          element={routeElement(true, LoadAnnouncement)}
          path="/loadAnnouncement"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
