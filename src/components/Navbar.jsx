import Header from "./Header";
import Card1 from "./Navbar/Cards/Card1";
import Card2 from "./Navbar/Cards/Card2";
import SearchBar from "./Navbar/SearchBar";
import LocationBar from "./Navbar/LocationBar";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import "../styles/Navbar.css"

const Navbar = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: 700, // scroll amount
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar-hero">
      <Header />

      <div className="navbar-search-row">
        <SearchBar />
        <LocationBar />
      </div>

      <div className="navbar-cards-row">
        <Card1 />
        <Card2 />
      </div>

      <div className="navbar-scroll">
        <button className="scroll-btn" onClick={scrollDown}>
          <RiArrowUpDoubleLine />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
