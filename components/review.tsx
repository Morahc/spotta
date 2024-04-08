"use client";

import { ReviewType } from "@/lib/types";
import { Star, ThumbsDown, ThumbsUp, MessageSquare } from "lucide-react";
import Image from "next/image";

type ReviewProps = {
  review: ReviewType;
};

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="flex flex-col gap-2 py-2 lg:py-6">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="h-6 w-6 relative">
            <Image src="/images/user.svg" alt="User Image" fill />
          </div>
          <p className="text-sm font-semibold">{review.author}</p>
          <p className="text-sm font-normal">{review.published}</p>
        </div>
        <div className="flex items-center gap-1">
          <Star
            fill="
          #FABB07"
            stroke="
          #FABB07"
            className="size-4 "
          />
          <p className="text-sm">{review.rating.toFixed(1)}</p>
        </div>
      </div>
      <p className="lg:text-lg">{review.text}</p>
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-1">
          <p>{review.like}</p>
          <ThumbsUp className="size-4" />
        </div>
        <div className="flex items-center gap-1">
          <p>{review.dislike}</p>
          <ThumbsDown className="size-4" />
        </div>
        <div className="flex items-center gap-1">
          <p>{review.comments}</p>
          <MessageSquare className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default Review;
