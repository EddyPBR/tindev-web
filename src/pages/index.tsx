import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tindev</title>
        <meta name="description" content="Aplicação para localização de desenvolvedores próximos geograficamente" />
      </Head>

      <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
        <main className="flex flex-col w-full max-w-xs gap-8">
          <Image src="/assets/logo.svg" alt="Tindev" priority layout="responsive" width={300} height={106} />
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Digite seu usuário no Github"
              className="h-12 w-full px-5 border border-gray-200 rounded text-gray-600"
            />
            <button
              type="submit"
              className="bg-primary text-gray-100 font-bold font-cursive h-12 rounded hover:bg-orange-700 hover:text-white transition-colors shadow-sm"
            >
              Enviar
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Home;
