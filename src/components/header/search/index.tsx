"use client";

import React from "react";

const SearchBox = () => {
  const [visibleDropdown, setVisibleDropdown] = React.useState<boolean>(false);
  const [changeInputSearch, setChangeInputSearch] = React.useState<string>("");

  return (
    <>
      <input
        type="text"
        onClick={() => setVisibleDropdown(true)}
        onChange={(e) => setChangeInputSearch(e.target.value)}
        className="w-[500px] h-[40px] bg-red-300 rounded-md border-1 border-black"
      />
      {visibleDropdown && (
        <div className={` absolute z-50 h-52 w-full  bg-yellow-200`}></div>
      )}
    </>
  );
};

export default SearchBox;
