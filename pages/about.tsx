import { ReactElement } from "react";
import { About, Layout } from "../components";

import type { NextPageWithLayout } from "./_app";

const AboutPage: NextPageWithLayout = () => {
  return <About />;
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AboutPage;
