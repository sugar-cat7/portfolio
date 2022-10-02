import { ReactElement, useEffect, useRef, useState } from "react";
import { Layout, Loading } from "../components";
import { client } from "../lib/client";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsShow(false), 3200);
  }, []);

  return <Loading isShow={false} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "dev-ex" });
//   console.log(data);
//   return {
//     props: {
//       experiences: data.contents,
//     },
//   };
// };

export default Page;
