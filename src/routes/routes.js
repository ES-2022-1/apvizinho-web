import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CreateAnnouncement from "../pages/CreateAnnouncement";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ForgotPassword from "../pages/ForgotPassword";
import Layout from "./Layout";
import { ListAnnoucements } from "../pages/ListAnnouncements";
import EditAnnouncement from "../pages/EditAnnouncement";
import { LoadAnnoucement } from "../pages/LoadAnnouncement";

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
            <Layout title="Anunciar vaga" isPrivate={true} component={<CreateAnnouncement />} />
          }
          path="/newAnnouncement"
        />
        <Route
          element={<Layout title="Editar anúncio" isPrivate={true} component={<EditAnnouncement />} />}
          path="/editAnnouncement"
        />
        <Route
          element={<Layout  isPrivate={true} component={<ListAnnoucements />} />}
          path="/announcements"
        />
        <Route
          element={<Layout isPrivate={true} component={<LoadAnnoucement />} />}
          path="/loadAnnouncement"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
