import React from "react";

const ProductCard = ({name, description, img}) => {
  return (
    <div className="flex flex-col flex-1 gap-2 transition card hover:scale-105">
      <img
        src={img}
        alt="iphone"
        className="object-cover object-center w-full h-40 rounded-2xl"
      />
      <h3 className="pl-2 text-xl font-semibold text-gray-900 ">{name}</h3>
      <p className="pl-2 info-text">
        {description}
      </p>
      <a href="#" className="self-center block w-[90%] px-4 py-2 my-3 btn">
        Discover More
      </a>
    </div>
  );
};

export default ProductCard;
