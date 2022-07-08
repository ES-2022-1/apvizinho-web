import React from "react";
import PrivateLayout from "../pages/_layouts/PrivateLayout";
import PublicLayout from "../pages/_layouts/PublicLayout";

const Layout = ({ isPrivate, component }) => {
  const PageLayout = isPrivate ? PrivateLayout : PublicLayout;
  return <PageLayout>{component}</PageLayout>;
};

export default Layout;
