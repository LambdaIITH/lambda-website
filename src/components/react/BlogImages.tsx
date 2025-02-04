import React from "react";
import { AnimatedTooltip } from "@components/react/animated-tooltip";

type AuthorProps = {
  author: {
    id: number;
    name: string;
    designation: string;
    image: string;
  };
};

const BlogImages: React.FC<any> = ({ authors }) => {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={authors} />
    </div>
  );
};
export default BlogImages;
