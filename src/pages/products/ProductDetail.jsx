import { useLocation, useParams, Link } from "react-router-dom";
import { techProducts } from "../../constants";
import ProductDetailBox from "../../components/products-page/ProductDetailBox";

const ProductDetail = () => {
  const { id } = useParams();
  const product = techProducts.filter((product) => product.id == id); // ! danger
  console.log(product);

  return (
    <section className="w-full max-container padding max-md:py-[5rem]">
      <Link to="/products" className="font-medium">
        {"<"} <span className="underline">Back to all Products</span>
      </Link>
      {product[0] ? (
        // <ProductItem product={product[0]} />
        <ProductDetailBox data={product[0]} />
      ) : (
        <div>
          <span className="text-red-600">
            There is no products with such ID :
          </span>{" "}
          {id}
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
