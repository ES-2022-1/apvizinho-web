import React from "react";

import { Route, Navigate } from "react-router-dom";
import PrivateLayout from "../pages/_layouts/PrivateLayout";
import PublicLayout from "../pages/_layouts/PublicLayout";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const access_token = sessionStorage.getItem("access_token");

  if (!access_token && isPrivate) {
    return <Route path="/" element={<Navigate to="/login" />} />;
  }

  if (!!access_token && !isPrivate) {
    return <Route path="/" element={<Navigate to="/announcements" />} />;
  }

  if (!access_token && !isPrivate) {
    return <Route path="/" element={<Navigate to="/user" />} />;
  }

  const Layout = isPrivate ? PrivateLayout : PublicLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
