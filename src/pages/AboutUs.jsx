import { aboutStats } from "../constants";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full gap-8 max-container padding"
    >
      <h2 className="text-3xl font-bold text-center">About Us</h2>
      <div className="grid items-center justify-center w-full grid-cols-2 gap-10 max-md:grid-cols-1">
        {aboutStats.map((stat, index) => (
          <div
            className="items-center flex-1 w-full gap-2 p-6 m-auto card"
            key={index}
          >
            <span>{<stat.icon className="text-primary" />}</span>
            <h4 className="font-bold text-md">{stat.name}</h4>
            <p className="text-sm text-center info-text">{stat.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
