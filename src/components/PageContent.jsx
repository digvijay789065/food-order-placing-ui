import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Navbar from "./Navbar";
import BigCards from "./BigCards";
import Burger from '..//../public/images/burger.png'
import Pizza from '..//../public/images/pizza.png'
import HotChoco from '..//../public/images/hotchocolate.png'
import FafdaJalebi from '..//../public/images/fafda-jalebi.png'
import MobileView from '..//../public/images/mobile-view.png'
import Jetha from '..//../public/images/jetha.png'

const PageContent = () => {

const items =[
        {
            img: Burger,
            title:"Ultimate Cheezi Supreme Veggie Burger",
            alt: "burger",
            description: "Loaded with molten cheese, crispy veggies, and layers that drip temptation!"
        },
        {
            img: Pizza,
            title:"Ultra Cheezy Paradise Pizza",
            alt: "pizza",
            description: "A molten wave of stretchy cheese that pulls like it’s begging you to take that bite!"
        },
        {
            img: FafdaJalebi,
            title:"Crispy Fafda with Sweet Jalebi Delight",
            alt: "fafda jalebi",
            description: "A perfect harmony of crunchy fafda and syrupy jalebi that dances on your taste buds!"
        },
        {
            img: HotChoco,
            title:"Cocoa Burst Supreme Hot Chocolate",
            alt: "hot chocolate",
            description: "A wild rush of molten chocolate that hits like a sweet explosion in every sip!"
        }
    ]

  return (
    <div className="max-w-full">
      <Navbar />
      <div className="flex justify-between mr-10">
        <LeftContent />
        {/* <RightContent /> */}
      </div>
        <BigCards
        items={items}
        />
        <div className="h-[60vh] bg-yellow-400 flex items-center justify-between">
          <div className="p-10 whitespace-nowrap">
            <h4 className="text-3xl text-white font-extrabold">DOWNLOAD OUR MOBILE APP</h4>
            <p className="text-xl text-center">Order you favourite food right from your Phones</p>
          </div>
          <div>
            <img className="h-[60vh] drop-shadow-2xl drop-shadow-black/60" src={Jetha} alt="" />
          </div>
          <div className="h-full">
            <img className="h-full drop-shadow-2xl drop-shadow-black/60" src={MobileView} alt="" />
          </div>
        </div>
    </div>
  );
};

export default PageContent;
