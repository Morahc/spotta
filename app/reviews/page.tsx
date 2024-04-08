import Image from "next/image";

import { reviews, images } from "@/lib/data";
import Review from "@/components/review";
import ReviewHeader from "@/components/review-header";

export default function Reviews() {
  return (
    <main className="flex flex-col gap-4 min-h-screen">
      <ReviewHeader />
      <section className="container">
        <div className="grid grid-cols-7 gap-12">
          <div className="col-span-full lg:col-span-4 flex flex-col gap-4 divide-y">
            {reviews.map((i, index) => (
              <Review review={i} key={index} />
            ))}
          </div>
          <div className="hidden lg:grid col-span-3 self-start grid-cols-2 gap-4 ">
            {images.map((item) => (
              <div key={item.src} className="relative h-[250px]">
                <Image src={item.src} alt={item.alt} sizes="100vw" fill />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
