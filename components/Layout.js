import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      {/* <TopBar /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
