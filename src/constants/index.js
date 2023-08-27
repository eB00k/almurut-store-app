import headphone from "../assets/card_headphone.jpg";
import laptop from "../assets/card_laptop.webp";
import iphone from "../assets/card_iphone.jpg";
import WorkIcon from "@mui/icons-material/Work";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PublicIcon from "@mui/icons-material/Public";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import p1 from "../assets/p_1.jpg";
import p2 from "../assets/p_2.jpg";
import p3 from "../assets/p_3.jpg";
import p4 from "../assets/p_4.avif";
import p5 from "../assets/p_5.webp";
import p6 from "../assets/p_6.jpg";
import p7 from "../assets/p_7.webp";
import p8 from "../assets/p_8.webp";
import p9 from "../assets/p_9.png";
import p10 from "../assets/p_10.jpg";
import p11 from "../assets/p_11.jpg";
import p12 from "../assets/p_12.jpeg";
import p13 from "../assets/p_13.jpg";
import p14 from "../assets/p_14.jpg";

export const navLinks = [
  { href: "#home", label: "Home", to: "/" },
  { href: "#about", label: "About Us", to: "/#about" },
  { href: "#products", label: "Products", to: "/products" },
  { href: "#contact-us", label: "Contact Us", to: "/" },
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

export const aboutStats = [
  {
    icon: WorkIcon,
    name: "Years of Experience",
    info: "Over a 10+ years of expertise",
  },
  {
    icon: PeopleAltIcon,
    name: "Customer Statisfaction",
    info: "95% fo cusomers rate us as excellent",
  },
  {
    icon: PublicIcon,
    name: "Global Reach",
    info: "Serving customers in 50+ countries",
  },
  {
    icon: PrecisionManufacturingIcon,
    name: "Innovative Products",
    info: "Discover the latest in tech innovation",
  },
];

export const techProducts = [
  {
    type: "laptop",
    brand: "Dell",
    model: "XPS 15",
    price: 1599.99,
    img: p1,
  },
  {
    type: "laptop",
    brand: "Apple",
    model: "MacBook Pro",
    price: 1999.0,
    img: p2,
  },
  {
    type: "smartphone",
    brand: "Samsung",
    model: "Galaxy S21",
    price: 799.99,
    img: p3,
  },
  {
    type: "smartphone",
    brand: "Apple",
    model: "iPhone 13",
    price: 799.0,
    img: p4,
  },
  {
    type: "headphone",
    brand: "Sony",
    model: "WH-1000XM4",
    price: 349.99,
    img: p5,
  },
  {
    type: "headphone",
    brand: "Bose",
    model: "QuietComfort 35 II",
    price: 299.95,
    img: p6,
  },
  {
    type: "tablet",
    brand: "Samsung",
    model: "Galaxy Tab S7",
    price: 649.99,
    img: p7,
  },
  {
    type: "tablet",
    brand: "Apple",
    model: "iPad Air",
    price: 599.0,
    img: p8,
  },
  {
    type: "smartwatch",
    brand: "Fitbit",
    model: "Versa 3",
    price: 229.95,
    img: p9,
  },
  {
    type: "smartwatch",
    brand: "Apple",
    model: "Apple Watch Series 7",
    price: 399.0,
    img: p10,
  },
  {
    type: "desktop",
    brand: "HP",
    model: "Pavilion 590",
    price: 799.99,
    img: p14,
  },
  {
    type: "desktop",
    brand: "Lenovo",
    model: "IdeaCentre 5",
    price: 699.0,
    img: p11,
  },
  {
    type: "camera",
    brand: "Canon",
    model: "EOS Rebel T7i",
    price: 749.99,
    img: p12,
  },
  {
    type: "camera",
    brand: "Sony",
    model: "A6400",
    price: 899.0,
    img: p13,
  },
];
