import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import BasicDemo from "./BasicDemo";

const ProductsFilter = ({getSearchValue}) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    getSearchValue(e.target.value)
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-between w-full p-4 bg-white rounded-md shadow-lg">
      {/* <BasicDemo /> */}
      <div className="flex items-center justify-center px-2 overflow-hidden bg-white border-2 rounded-lg border-grayy">
        <span onClick={handleSearch}>
          <SearchIcon className="transition-all text-grayy active:scale-125 " />
        </span>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          className="p-1 outline-none"
        />
      </div>
    </div>
  );
};

export default ProductsFilter;
