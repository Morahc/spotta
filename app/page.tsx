import Image from "next/image";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen container">
      <Header />
      <div className="flex-grow flex justify-between gap-20 h-full">
        <div className="self-center flex flex-col gap-6 lg:gap-8 items-start">
          <h1 className="text-5xl lg:text-6xl font-semibold lg:font-bold">
            Find a place you will love to live!
          </h1>
          <h3 className="text-lg lg:text-2xl lg:w-3/4">
            See through the lenses of people who have lived or visited the neighbourhood you might
            have in mind.
          </h3>
          <Label className="relative w-full">
            <Search className="pointer-events-none size-4 absolute top-1/2 transform -translate-y-1/2 left-2" />
            <Input type="text" placeholder="Enter Address" className="px-8 bg-muted" />
          </Label>
          <Button size="lg">SEARCH</Button>
        </div>
        <div className="hidden lg:block w-full relative">
          <Image
            src="/images/Reviews.png"
            alt="Reviews"
            sizes="100vw"
            fill
            className="object-contain object-right"
          />
        </div>
      </div>
    </main>
  );
}
