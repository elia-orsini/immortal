"use client";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import useSingleMagazine from "@/hooks/useSingleMagazine";
import { NextPage } from "next";
import { NotionRenderer } from "react-notion";

const SingleMagazine: NextPage<{ params: any }> = ({ params }) => {
  const { magazineData, isLoading } = useSingleMagazine(params.slug);

  if (isLoading) return <></>;

  return (
    <div className="flex min-h-screen w-screen flex-col mb-20">
      <div className="mx-auto w-11/12 sm:w-8/12">
        <NotionRenderer blockMap={magazineData} />
      </div>
    </div>
  );
};

export default SingleMagazine;
