import Head from "next/head";
import React from "react";
import styles from "./Layout.module.scss";
import { Footer } from "./Navbar/Footer";
import { Header } from "./Navbar/Header";

type Props = { children: React.ReactElement };

export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
