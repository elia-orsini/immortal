"use client";
import Magazine from "@/types/IMagazine";
import MagazinesList from "./MagazinesList";
import { useState } from "react";
import sortGroupMagazines from "@/utils/sortGroupMagazines";
import SearchInput from "./SearchInput";
import StatsComponent from "../index/StatsComponent";

const MagazinesSection: React.FC<{
  filteredMags: Magazine[];
}> = ({ filteredMags }) => {
  const [searchedMags, setSearchedMags] = useState<Magazine[]>(filteredMags);

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col xl:flex-row mb-6 sm:mb-8 gap-y-2">
        <StatsComponent filteredMags={filteredMags} />

        <SearchInput
          filteredMags={filteredMags}
          setSearchedMags={setSearchedMags}
        />
      </div>

      <MagazinesList dividedByCategory={sortGroupMagazines(searchedMags)} />

      {!searchedMags.length && (
        <p className="sm:min-w-[50vw] text-sm">no results found</p>
      )}
    </div>
  );
};

export default MagazinesSection;
