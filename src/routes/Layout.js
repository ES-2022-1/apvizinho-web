import React from "react";
import PrivateLayout from "../pages/_layouts/PrivateLayout";
import PublicLayout from "../pages/_layouts/PublicLayout";

const Layout = ({ isPrivate, component, title }) => {
  const PageLayout = isPrivate ? PrivateLayout : PublicLayout;
  return <PageLayout title={title}>{component}</PageLayout>;
};

export default Layout;
