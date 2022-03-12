import type { FC } from "react";
import Head from "next/head";
import { SEOComponentProps } from "../@types/components/SEO";

const SEO: FC<SEOComponentProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export { SEO };
