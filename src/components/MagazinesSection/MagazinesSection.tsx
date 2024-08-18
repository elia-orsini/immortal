"use client";
import Magazine from "@/types/IMagazine";
import MagazinesList from "./MagazinesList";
import { FormEvent, useRef, useState } from "react";
import sortGroupMagazines from "@/utils/sortGroupMagazines";
import Image from "next/image";
import SearchInput from "./SearchInput";

const MagazinesSection: React.FC<{
  filteredMags: Magazine[];
}> = ({ filteredMags }) => {
  const [searchedMags, setSearchedMags] = useState<Magazine[]>(filteredMags);

  return (
    <div className="w-full flex flex-col">
      <SearchInput
        filteredMags={filteredMags}
        setSearchedMags={setSearchedMags}
      />

      <MagazinesList dividedByCategory={sortGroupMagazines(searchedMags)} />
    </div>
  );
};

export default MagazinesSection;
