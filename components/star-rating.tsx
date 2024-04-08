import { Star } from "lucide-react";
import React from "react";

const StarRating = () => {
  return (
    <div className="flex gap-2">
      <Star fill="#FFC70066" stroke="#FFC70066" className="size-4 " />
      <Star fill="#FFC70066" stroke="#FFC70066" className="size-4 " />
      <Star fill="#FFC70066" stroke="#FFC70066" className="size-4 " />
      <Star fill="#FFC70066" stroke="#FFC70066" className="size-4 " />
      <Star fill="#FFC70066" stroke="#FFC70066" className="size-4 " />
    </div>
  );
};

export default StarRating;
