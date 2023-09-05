import ProductsFilter from "../../components/products-page/ProductsFilter";
import ProductItem from "../../components/products-page/ProductItem";
import { techProducts } from "../../constants";
import { Link } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const [displayedData, setDisplayedData] = useState(techProducts);

  function handleFilter(target) {
    const filteredData = techProducts.filter((item) =>
      item.model.toLowerCase().includes(target.toLowerCase())
    );
    setDisplayedData(filteredData);
    console.log(filteredData);
  }

  const getSearchValue = (value) => {
    handleFilter(value.trim());
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 padding max-container">
      <ProductsFilter getSearchValue={getSearchValue} />
      <div className="grid w-full grid-cols-3 gap-8 p-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-0 justify-items-center">
        {displayedData.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id}>
            <ProductItem product={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
