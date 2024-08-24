import Link from "next/link";

import drawnFont from "@/utils/drawnFont";

const SmallNav: React.FC = () => {
  return (
    <nav className="w-full h-10 border-b border-black px-2 sm:px-10 flex">
      <Link href="/" className={`my-auto ${drawnFont}`}>
        immortal mags
      </Link>
    </nav>
  );
};

export default SmallNav;
