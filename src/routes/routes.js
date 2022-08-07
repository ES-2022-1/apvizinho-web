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
import LoadUser from "../pages/LoadUser";
import { UserAnnoucements } from "../pages/UserAnnouncements";
import { useAuth } from "../hooks/auth";
import DeleteAnnoucement from "../pages/DeleteAnnouncement";

const Router = () => {
  const routeElement = (isPrivate, Component, title, showBackArrow) => {
    const Layout = isPrivate ? PrivateLayout : PublicLayout;

    return (
      <Layout title={title} showBackArrow={showBackArrow}>
        <Component />
      </Layout>
    );
  };

  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            user ? (
              <Navigate to={{ pathname: "/announcements" }} />
            ) : (
              routeElement(false, LandingPage)
            )
          }
          exact
          path="/"
        />
        <Route
          element={
            user ? (
              <Navigate to={{ pathname: "/announcements" }} />
            ) : (
              routeElement(false, LogIn)
            )
          }
          path="/login"
        />
        <Route
          element={
            user ? (
              <Navigate to={{ pathname: "/announcements" }} />
            ) : (
              routeElement(false, SignUp)
            )
          }
          path="/signup"
        />
        <Route
          element={routeElement(false, ForgotPassword)}
          path="/forgotPassword"
        />
        <Route
          element={routeElement(true, EditUser, "Editar perfil")}
          path="/editUser"
        />
        <Route
          element={routeElement(true, CreateAnnouncement, "Criar anúncio")}
          path="/newAnnouncement"
        />
        <Route
          element={routeElement(true, EditAnnouncement, "Editar anúncio")}
          path="/editAnnouncement/:announcementId"
        />
        <Route
          element={routeElement(true, ListAnnouncements, "", false)}
          path="/announcements"
        />
        <Route
          element={routeElement(true, LoadAnnouncement)}
          path="/announcement/:announcementId"
        />
        <Route
          element={routeElement(true, UserAnnoucements)}
          path="/userAnnouncements/:userId"
        />
        <Route
          element={routeElement(true, LoadUser, "Meu perfil")}
          path="/profile"
        />
        <Route
          element={routeElement(true, DeleteAnnoucement)}
          path="announcement/:announcementId"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
