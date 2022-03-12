import type { NextPage } from "next";
import Image from "next/image";
import { SEO } from "@components/SEO";

const Main: NextPage = () => {
  return (
    <>
      <SEO title="Developer | Tindev" description="Lista de desenvolvedores do Tindev" />

      <div className="bg-gray-100 w-screen min-h-screen h-full">
        <main className="container mx-auto py-12 text-center px-8">
          <Image src="/assets/logo.svg" alt="tindev" width={240} height={88} />

          <ul className="mt-8 grid grid-cols-1 max-w-xs mx-auto sm:max-w-none sm:mx-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 gap-y-12">
            <li className="flex flex-col">
              <Image
                src="https://avatars.githubusercontent.com/u/48658479?v=4"
                alt="github_user_name"
                layout="responsive"
                width={282}
                height={282}
                className="rounded-t"
              />

              <footer className="flex-1 bg-white border border-gray-200 py-4 px-5 rounded-b-sm text-left">
                <strong className="text-gray-700 text">Edvaldo Junior</strong>
                <p className="text-sm text-gray-500 mt-1">
                  Desenvolvedor Fullstack graduado em análise e desenvolvimento de sistemas apaixonado pelo ecossistema
                  javascript.
                </p>
              </footer>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="h-12 shadow-sm rounded bg-white border-gray-100 group"
                  aria-label="Dislike"
                >
                  <div className="group-hover:-translate-y-0.5 group-hover:transition-transform ease-in">
                    <Image src="/assets/dislike.svg" priority alt="Dislike" width={20} height={20} />
                  </div>
                </button>
                <button
                  type="button"
                  className="h-12 shadow-sm rounded bg-white border-gray-100 group"
                  aria-label="Like"
                >
                  <div className="group-hover:-translate-y-0.5 group-hover:transition-transform ease-in">
                    <Image src="/assets/like.svg" priority alt="Like" width={24} height={24} />
                  </div>
                </button>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default Main;
