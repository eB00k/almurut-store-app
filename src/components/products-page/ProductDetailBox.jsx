import { formatCurrency } from "../../utils";
import RatingReviews from "./RatingReviews";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

const QuantityType = {
  increament: "increament",
  decreament: "decreament",
};

const ProductDetailBox = ({ data }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [likedStatus, setLikedStatus] = useState(data.liked);

  const handleQuantityChange = (type) => {
    if (type === QuantityType.increament) {
      if (productQuantity === 99) return;
      setProductQuantity(productQuantity + 1);
    } else {
      if (productQuantity === 1) return;
      setProductQuantity(productQuantity - 1);
    }
  };

  const toggleLiked = () => {
    setLikedStatus(!likedStatus);
  };

  return (
    <div className="flex flex-row justify-around gap-8 mt-4 overflow-hidden max-md:flex-col">
      <div className="flex-1 min-h-[400px] flex justify-center items-center bg-white rounded-md">
        <img src={data.img} width={400} />
      </div>
      <div className="flex-1">
        <h3 className="text-3xl font-bold">{data.model}</h3>
        <div className="flex gap-2 mt-2">
          <RatingReviews rating={data.reviews.starsAverage} />
          <span className="info-text">({data.reviews.totalVotes} reviews)</span>
        </div>
        <div className="my-4 text-xl font-medium text-red-600">
          {formatCurrency(data.price)}
        </div>
        <hr />
        <p className="my-4 info-text">{data.description}</p>
        <hr />
        <div className="flex gap-4 my-4 max-md:flex-col">
          <div className="font-medium uppercase btn text-[12px] cursor-pointer py-3 px-6 hover:opacity-90 transition">
            add to cart
          </div>
          <div className="flex gap-4">
            <div className="flex w-40 text-xl font-medium border-2 rounded-md border-primary">
              <div
                className="flex items-center justify-center flex-1 py-2 cursor-pointer select-none"
                onClick={() => handleQuantityChange("decreament")}
              >
                -
              </div>
              <div className="flex-[1.2] border-x-2 border-primary flex py-2 justify-center items-center">
                {productQuantity}
              </div>
              <div
                className="flex items-center justify-center flex-1 py-2 cursor-pointer select-none"
                onClick={() => handleQuantityChange("increament")}
              >
                +
              </div>
            </div>
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={toggleLiked}
            >
              {likedStatus ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2 mt-4">
          <div className="info-text">
            <span className="font-medium text-primary">Type: </span> {data.type}
          </div>
          <div className="info-text">
            <span className="font-medium text-primary">Brand: </span>{" "}
            {data.brand}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailBox;
