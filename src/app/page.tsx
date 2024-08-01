"use client";

import AnimatedIntro from "@/components/AnimatedIntro";
import MagazinesList from "@/components/MagazinesList";
import useMagazines from "@/hooks/useMagazines";

export default function Home() {
  const { magazines, isLoading } = useMagazines();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex">
        <p className="m-auto">loading</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-screen flex-col mb-20">
      <AnimatedIntro />

      <MagazinesList magazines={magazines} />
    </div>
  );
}
