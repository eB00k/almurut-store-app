import headphone from "../assets/card_headphone.jpg";
import laptop from "../assets/card_laptop.webp";
import iphone from "../assets/card_iphone.jpg";
import WorkIcon from "@mui/icons-material/Work";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PublicIcon from "@mui/icons-material/Public";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
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
