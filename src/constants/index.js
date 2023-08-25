import headphone from "../assets/card_headphone.jpg";
import laptop from "../assets/card_laptop.webp";
import iphone from "../assets/card_iphone.jpg";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const cards = [
  {
    name: "Laptops",
    description:
      "Unleash productivity with our powerful laptops designed to keep up with your demands.",
    img: laptop,
  },
  {
    name: "Phones",
    description:
      "Stay connected and experience innovation on the go with our latest smartphone collection",
    img: iphone,
  },
  {
    name: "Headphones",
    description:
      "Immerse yourself in superior sound quality with our premium range of headphones and earbuds.",
    img: headphone,
  },
];
