import { ChevronRight } from "lucide-react";

import { tags } from "@/lib/data";
import { Badge } from "./ui/badge";

const Tags = () => {
  return (
    <div className="flex flex-wrap gap-2 lg:justify-between">
      {tags.map((i) => (
        <Badge variant="outline" key={i}>
          {i}
        </Badge>
      ))}
      <Badge variant="outline" className="rounded-full p-1 h-8 w-8">
        <ChevronRight />
      </Badge>
    </div>
  );
};

export default Tags;
