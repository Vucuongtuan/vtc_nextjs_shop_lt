import React from "react";

export const Skeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="skeleton h-52 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};
