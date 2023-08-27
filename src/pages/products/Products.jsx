import ProductsFilter from "../../components/products-page/ProductsFilter";
import ProductItem from "../../components/products-page/ProductItem";
import { techProducts } from "../../constants";

const Products = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 padding max-container">
      <ProductsFilter />
      <div className="grid w-full grid-cols-3 gap-8 p-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-0 justify-items-center">
        {techProducts.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
