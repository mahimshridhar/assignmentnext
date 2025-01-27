import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Main from "./main";

const GlobalLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="layout">
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
