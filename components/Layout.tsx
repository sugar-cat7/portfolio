import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Loading } from "./Animations/Loading";
import styles from "./Layout.module.scss";
import { Footer } from "./Navbar/Footer";
import { Header } from "./Navbar/Header";

type Props = { children: React.ReactElement };

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
