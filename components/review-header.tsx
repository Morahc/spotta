"use client";

import Image from "next/image";
import { Bookmark, Share2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Tags from "./tags";
import { Input } from "./ui/input";
import ReviewModal from "./modal/review-modal";
import Link from "next/link";

const ReviewHeader = () => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <ReviewModal isOpen={isOpen} setIsopen={setIsopen} />
      <section className="bg-muted">
        <div className="container">
          <header className="flex flex-col gap-6 py-4 lg:py-8">
            <div className="flex items-center flex-wrap justify-between gap-y-2">
              <Link href="/">
                <Image src="/images/ic_logo.svg" alt="logo" width={90} height={30} />
              </Link>
              <Input
                type="search"
                className="order-last lg:order-2 lg:w-1/2 me-auto lg:ms-12"
                placeholder="Bonny and Clyde Street, Ajao Estate, Lagos"
              />
              <div className="flex gap-2 lg:gap-4 items-center order-3">
                <span className="text-sm md:text-base font-semibold">Welcome!</span>
                <Image alt="Avatar" src="/images/header-avatar.svg" width={36} height={36} />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-xl lg:text-2xl font-semibold">
                  Bonny and Clyde Street, Ajao Estate, Lagos
                </h2>
                <p className="text-base lg:text-lg">
                  <span className="font-semibold">&quot;450&quot; Reviews </span> (People are raving
                  about the selected location)
                </p>
              </div>
              <div className="space-x-3">
                <Button size="lg" onClick={() => setIsopen(true)}>
                  LEAVE A REVIEW
                </Button>
                <Button size="icon" variant="outline">
                  <Bookmark className="size-4 lg:size-5" />
                </Button>
                <Button size="icon" variant="outline">
                  <Share2 className="size-4 lg:size-5" />
                </Button>
              </div>
            </div>
            <Tags />
          </header>
        </div>
      </section>
    </>
  );
};

export default ReviewHeader;
