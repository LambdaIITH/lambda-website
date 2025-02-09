import React from "react";
import { AnimatedTooltip } from "@components/react/animated-tooltip";

const BlogImages: React.FC<any> = ({ authors }) => {
  return (
    <div className="flex items-center justify-center gap-x-2 w-full">
      <AnimatedTooltip items={authors} />
    </div>
  );
};

export default BlogImages;

