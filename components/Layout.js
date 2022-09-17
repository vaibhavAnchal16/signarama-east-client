import React from "react";
import client from "../apollo-client";
import { SIGNS } from "../graphql/queries";
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
