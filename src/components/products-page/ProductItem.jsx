import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { formatCurrency } from "../../utils";

const ProductItem = ({ product }) => {
  return (
    <div className="max-w-[300px] min-w-[280px] bg-white shadow-lg rounded-lg mx-1 my-3 flex flex-col min-h-[200px] overflow-hidden gap-4 relative justify-between max-sm:min-w-[300px] hover:scale-105 transition cursor-pointer">
      <img
        src={product.img}
        alt={product.model}
        className="object-contain object-center w-full h-[200px]"
      />

      <div className="absolute cursor-pointer top-2 right-2">
        {product.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>

      <div className="bg-slate-200">
        <div className="flex flex-col gap-2 p-4 bg-whitee">
          <h3 className="text-lg font-bold text-primary">{product.model}</h3>
          <div className="flex flex-wrap justify-between gap-2">
            <h4 className="info-text text-[14px] tracking-wide font-medium flex gap-2">
              <span> {product.type}</span>
              <span className="px-2 rounded-md text-primary border border-primary text-[12px] font-medium">
                {product.brand}
              </span>
            </h4>
            <div className="text-lg font-bold">
              {formatCurrency(product.price)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
