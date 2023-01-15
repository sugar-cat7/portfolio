import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Loading } from "./Animations/Loading";
import styles from "./Layout.module.scss";
import { Footer } from "./Navbar/Footer";
import { Header } from "./Navbar/Header";

type Props = { children: React.ReactElement };

export const Layout: React.FC<Props> = ({ children }) => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsShow(false), 2200);
  }, []);
  return isShow ? (
    <Loading />
  ) : (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
