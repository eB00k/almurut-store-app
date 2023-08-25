import React from "react";
import ProductCard from "../components/ProductCard";
import { cards } from "../constants";

const Featured = () => {
  return (
    <section className="py-6 padding-x max-container">
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <h2 className="text-3xl font-bold text-center">
          Discover <span className="text-secondary">Cutting-Edge</span> Tech
        </h2>
        <div className="flex flex-wrap justify-between w-full gap-6 max-lg:justify-around">
          {cards.map((card) => (
            <ProductCard {...card} key={card.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
