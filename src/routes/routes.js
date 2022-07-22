import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CreateAnnouncement from "../pages/CreateAnnouncement";

import SignUp from "../pages/SignUp";
<<<<<<< HEAD
import Announcement from "../pages/Announcement";
=======
import LogIn from "../pages/LogIn";
>>>>>>> b2c5a2a575a773149a72d96821d37bcbfeb5be5e
import LandingPage from "../pages/LandingPage";
import Layout from "./Layout";

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
          element={<Layout isPrivate={false} component={<SignUp />} />}
          path="/signup"
        />
        <Route
          element={<Layout isPrivate={true} component={<Announcement />} />}
          path="/announcement"
        />
        <Route
          element={<Layout isPrivate={true} component={<CreateAnnouncement />} />}
          path="/newAnnouncement"
        />
      </Routes>
        
    </BrowserRouter>
  );
};

export default Router;
