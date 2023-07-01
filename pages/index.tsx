import { ReactElement, useEffect, useRef, useState } from "react";
import { Layout, Loading } from "../components";
import AboutPage from "./about";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return <AboutPage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
