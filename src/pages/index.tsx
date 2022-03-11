import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Tindev</title>
        <meta
          name="description"
          content="Aplicação para localização de desenvolvedores próximos geograficamente"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <div className="h-screen w-screen bg-gray-900 text-red-500 flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl text-gray-100">TINDEV</h1>
        <p className="text-sm text-gray-200">By: EddyPBR</p>
      </div>
    </>
  );
};

export default Home;
