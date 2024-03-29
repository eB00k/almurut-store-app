import ProductsFilter from "../../components/products-page/ProductsFilter";
import ProductItem from "../../components/products-page/ProductItem";
import { techProducts } from "../../constants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { defaultFilters } from "../../constants";
import { FALSE } from "sass";

const FILTER_OPTIONS = {};

defaultFilters.forEach((filter) => {
  FILTER_OPTIONS[filter.type] = true;
});

FILTER_OPTIONS.all = true;

const Products = () => {
  const [state, setState] = useState({
    displayedData: techProducts,
    search: "",
    opts: FILTER_OPTIONS,
    favorite: false,
  });

  useEffect(() => {
    handleSearchAndFilter();
  }, [state.search, state.opts, state.favorite]);

  function handleSearchAndFilter() {
    const { search, opts, favorite } = state;
    const filteredData = techProducts.filter((item) => {
      // Filter by search input
      const searchMatch = item.model
        .toLowerCase()
        .includes(search.toLowerCase());

      // Filter by type option
      const typeMatch = opts.all || opts[item.type.toLowerCase()];

      // Filter by favorite option
      const favoriteMatch = favorite ? item.liked : true;

      return searchMatch && typeMatch && favoriteMatch;
    });

    setState({ ...state, displayedData: filteredData });
  }

  const getSearchValue = (value) => {
    setState({ ...state, search: value });
  };

  const getFilterOptions = (options) => {
    setState({ ...state, opts: options });
  };

  const getFavoritesValue = (favorite) => {
    setState({ ...state, favorite: favorite });
  };

  const { displayedData } = state;

  return (
    <div className="flex flex-col items-center justify-center gap-4 padding max-container">
      <ProductsFilter
        getSearchValue={getSearchValue}
        getFilterOptions={getFilterOptions}
        getFavoritesValue={getFavoritesValue}
      />
      {displayedData.length ? (
        <div className="grid w-full grid-cols-3 gap-8 p-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-0 justify-items-center">
          {displayedData.map((item) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <ProductItem product={item} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-slate-gray">No products was found.</div>
      )}
    </div>
  );
};

export default Products;
