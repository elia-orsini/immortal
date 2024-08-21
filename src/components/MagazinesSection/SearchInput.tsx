import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

import Magazine from "@/types/IMagazine";

const SearchInput: React.FC<{
  filteredMags: Magazine[];
  setSearchedMags: Dispatch<SetStateAction<Magazine[]>>;
}> = ({ filteredMags, setSearchedMags }) => {
  const [searchedKey, setSearchedKey] = useState<string>("");

  const inputField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "f") {
        event.preventDefault();

        inputField.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputField]);

  function onInputChange(e: FormEvent) {
    e.preventDefault();

    const target = e.target as HTMLInputElement;

    const regexPattern = new RegExp(target.value, "gi");
    const filtered = filteredMags.filter((mag) => mag.name.match(regexPattern));

    setSearchedKey(target.value);
    setSearchedMags(filtered);
  }

  return (
    <div className="flex xl:ml-auto ">
      <input
        ref={inputField}
        onChange={(e) => onInputChange(e)}
        value={searchedKey}
        type="text"
        className="focus:outline-none w-[110px] placeholder:text-sm text-sm"
        placeholder="Type to search ..."
      />
      <button className="w-3" onClick={() => inputField.current?.focus()}>
        <Image
          alt="search icon, filter our repository of magazines from around the world"
          src="search-icon.svg"
          width={16}
          height={16}
          className="inline mb-1 ml-"
        />
      </button>
    </div>
  );
};

export default SearchInput;
