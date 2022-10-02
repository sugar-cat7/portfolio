import { ReactElement } from "react";
import { Works, Layout } from "../components";
import type { NextPageWithLayout } from "./_app";

const WorkPage: NextPageWithLayout = () => {
  return <Works />;
};

WorkPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default WorkPage;
