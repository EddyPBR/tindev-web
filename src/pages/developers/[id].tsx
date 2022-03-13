import { useState, useEffect } from "react";
import Image from "next/image";
import { SEO } from "@components/SEO";
import { getAvailableDevelopers } from "@requests/getAvailableDevelopers";
import type { NextPage } from "next";
import type { AvailableDeveloper } from "@@types/developer";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const Main: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string | undefined;

  const [developers, setDevelopers] = useState<AvailableDeveloper[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetAvailableDevelopers = async (id: string) => {
    setIsLoading(true);

    try {
      const { data: developers } = await getAvailableDevelopers({ id });
      setDevelopers(developers);
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Erro indefinido");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    handleGetAvailableDevelopers(id);
  }, [id]);

  return (
    <>
      <SEO title="Developer | Tindev" description="Lista de desenvolvedores do Tindev" />

      <div className="bg-gray-100 w-screen min-h-screen h-full">
        <main className="container mx-auto py-12 text-center px-8">
          <Image src="/assets/logo.svg" alt="tindev" width={240} height={88} />

          <ul className="mt-8 grid grid-cols-1 max-w-xs mx-auto sm:max-w-none sm:mx-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 gap-y-12">
            {!isLoading &&
              developers.map((developer) => (
                <li className="flex flex-col" key={developer.id}>
                  <Image
                    src={developer.avatar_url}
                    alt={developer.user}
                    layout="responsive"
                    width={282}
                    height={282}
                    className="rounded-t"
                  />

                  <footer className="flex-1 bg-white border border-gray-200 py-4 px-5 rounded-b-sm text-left">
                    <strong className="text-gray-700 text">{developer.name}</strong>
                    <p className="text-sm text-gray-500 mt-1">{developer.bio}</p>
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
              ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Main;
