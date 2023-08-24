import macbook from "../../assets/macbook.png";

export default function Home() {
  return (
    <section className="flex flex-row justify-around min-h-screen gap-2 max-sm:gap-0 max-lg:flex-col font-poppins padding max-container">
      <div className="flex flex-col items-start justify-center flex-1 gap-8 mt-8 max-sm:gap-4 max-lg:text-center">
        <h1 className="text-4xl font-bold max-sm:text-[32px] max-sm:leading-10">
          Tech Unleashed: Your{" "}
          <span className="text-secondary">Imagination</span>, Our Innovation
        </h1>
        <p className="info-text max-sm:text-base">
          Discover the Future with Smartphones, Laptops, AirPods, and{" "}
          <span className="underline">More</span>
        </p>
      </div>
      <div className="flex items-center justify-center flex-1 object-cover">
        <img src={macbook} alt="macbook" className="w-full max-w-full" />
      </div>
    </section>
  );
}
