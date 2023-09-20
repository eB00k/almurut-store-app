import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterType from "./FilterType";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const ProductsFilter = ({ getSearchValue, getFilterOptions, getFavoritesValue }) => {
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState(false);

  const handleSearch = (e) => {
    getSearchValue(e.target.value);
    setSearch(e.target.value);
  };

  const handleFavorite = () => {
    console.log(!favorite)
    getFavoritesValue(!favorite)
    setFavorite((prev) => !prev)
  }

  return (
    <div className="flex justify-between w-full gap-4 p-4 bg-white rounded-md shadow-md">
      <div className="flex justify-between gap-4">
        <FilterType getFilterOptions={getFilterOptions} />
        <div
          className="h-[100%] flex justify-center items-center rounded-lg border-2 border-grayy px-2 cursor-pointer"
          title="favorites"
          onClick={handleFavorite}
        >
          {favorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </div>
      </div>
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
