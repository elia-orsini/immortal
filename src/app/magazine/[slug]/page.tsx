"use client";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NextPage } from "next";
import Link from "next/link";
import { NotionRenderer } from "react-notion";

import drawnFont from "@/utils/drawnFont";
import SingleMagazineHeader from "@/components/SingleMagazineHeader";
import useSingleMagazineData from "@/hooks/useSingleMagazineData";
import useSingleMagazineMeta from "@/hooks/useSingleMagazineMeta";
import SingleMagazineMeta from "@/components/SingleMagazineMeta";

const SingleMagazine: NextPage<{ params: any }> = ({ params }) => {
  const { magazineData, isLoadingData } = useSingleMagazineData(params.slug);
  const { magazineMeta, isLoadingMeta } = useSingleMagazineMeta(params.slug);

  if (isLoadingData || isLoadingMeta) return <></>;

  return (
    <div className="flex min-h-screen w-screen flex-col mb-20">
      <div className="w-full h-10 border-b border-black px-2 sm:px-10 flex">
        <Link href="/" className={`my-auto ${drawnFont}`}>
          {" "}
          immortal mags
        </Link>
      </div>

      <SingleMagazineHeader meta={magazineMeta} />

      <SingleMagazineMeta meta={magazineMeta} />

      <div className="mx-auto w-11/12 sm:w-8/12">
        <NotionRenderer blockMap={magazineData} />
      </div>
    </div>
  );
};

export default SingleMagazine;
