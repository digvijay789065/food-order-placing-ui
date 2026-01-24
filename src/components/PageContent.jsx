import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Navbar from "./Navbar";
import BigCards from "./BigCards";
import Burger from "..//../public/images/burger.webp";
import Pizza from "..//../public/images/pizza.webp";
import HotChoco from "..//../public/images/hotchocolate.webp";
import FafdaJalebi from "..//../public/images/fafda-jalebi.webp";
import MobileView from "..//../public/images/mobile-view.webp";
import Jetha from "..//../public/images/jetha.webp";
import "..//styles/PageContent.css";
import Footer from "./Footer";


const PageContent = () => {
  const items = [
    {
      img: Burger,
      title: "Ultimate Cheezi Supreme Veggie Burger",
      alt: "burger",
      description:
        "Loaded with molten cheese, crispy veggies, and layers that drip temptation!",
    },
    {
      img: Pizza,
      title: "Ultra Cheezy Paradise Pizza",
      alt: "pizza",
      description:
        "A molten wave of stretchy cheese that pulls like it’s begging you to take that bite!",
    },
    {
      img: FafdaJalebi,
      title: "Crispy Fafda with Sweet Jalebi Delight",
      alt: "fafda jalebi",
      description:
        "A perfect harmony of crunchy fafda and syrupy jalebi that dances on your taste buds!",
    },
    {
      img: HotChoco,
      title: "Cocoa Burst Supreme Hot Chocolate",
      alt: "hot chocolate",
      description:
        "A wild rush of molten chocolate that hits like a sweet explosion in every sip!",
    },
  ];

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="top-section">
        <LeftContent />
      </div>

      <BigCards items={items} />

      <div className="app-banner">
        <div className="app-text">
          <h4>DOWNLOAD OUR MOBILE APP</h4>
          <p>Order your favourite food right from your phone</p>
        </div>

        <div className="app-image-left">
          <img src={Jetha} alt="Jetha" />
        </div>

        <div className="app-image-right">
          <img src={MobileView} alt="Mobile view" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageContent;
