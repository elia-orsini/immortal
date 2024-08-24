import SmallNav from "@/components/SmallNav";
import drawnFont from "@/utils/drawnFont";
import Link from "next/link";

export default async function Custom404() {
  return (
    <main className="flex min-h-screen w-screen flex-col">
      <div className="m-auto flex flex-col text-center">
        <div className={`${drawnFont} text-4xl`}>page not found</div>
        <Link className="text-sm mt-4 underline" href={"/"}>
          Get Back to Homepage
        </Link>
      </div>
    </main>
  );
}
