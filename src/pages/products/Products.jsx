import ProductsFilter from "../../components/products-page/ProductsFilter";
import ProductItem from "../../components/products-page/ProductItem";
import { techProducts } from "../../constants";
import { useState } from "react";

const Products = () => {
  const [search, setSearch] = useState("");
  const [displayedData, setDisplayedData] = useState(techProducts);
  let timeoutId;

  function handleFilter() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const filteredData = techProducts.filter(
        (item) =>
          item.model.toLowerCase().includes(search.toLowerCase()) ||
          item.brand.toLowerCase().includes(search.toLowerCase())
      );
      setDisplayedData(filteredData);
    }, 200);
  }

  const getSearchValue = (value) => {
    setSearch(value.trim());
    handleFilter();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 padding max-container">
      <ProductsFilter getSearchValue={getSearchValue} />
      <div className="grid w-full grid-cols-3 gap-8 p-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-0 justify-items-center">
        {displayedData.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
