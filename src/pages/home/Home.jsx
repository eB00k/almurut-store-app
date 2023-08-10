import "./home.scss";
import iphone from "../../assets/iphone.png";
import macbook from "../../assets/macbook.png";
import Navbar from "../../components/layouts/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <div className="hero__text">
          <h1>Tech Unleashed: Your Imagination, Our Innovation</h1>
          <p>
            Discover the Future with Smartphones, Laptops, AirPods, and
            <span className="link">More</span>
          </p>
        </div>
        <div className="hero__banner">
          <img src={macbook} alt="macbook" style={{}} />
        </div>
      </div>
    </div>
  );
}
