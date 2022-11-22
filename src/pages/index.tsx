import Head from "next/head";

import { NextPageWithLayout } from "~/types/common.types";

import playlistData from "~/data/playlistData.json";

import Layout from "~/components/Layout/Layout.component";
import Main from "~/views/Main/Main.view";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>DaftAcademy - WebApp 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Main items={playlistData} />
      </div>
    </>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
