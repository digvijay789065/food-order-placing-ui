import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";


const Footer = () => {
  return (
    <div className='h-[65vh] w-full bg-gray-800'>
      <div>
        <div className='flex justify-evenly'>
          <div className='text-center py-10'>
            <h4 className='text-green-500 font-extrabold text-2xl'>Foodie</h4>
            <p className='text-white'>© {new Date().getFullYear()} Foodie Limited</p>
          </div>
          <div className='flex gap-30 py-10'>
            <div className='text-white flex flex-col gap-2'>
                <h4 className='font-bold'>Quick Links</h4>
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">Offers</a>
                <a href="#">About Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Customer Support</a>
            </div>
            <div className='flex flex-col gap-11'>
              <div className='text-white flex flex-col gap-2'>
                <h4 className='font-bold'>Contact Us</h4>
                <a href="#">Address: Saharanpur, Uttar Pradesh</a>
                <p>Email: <a href="#">foodie.digvijay@food.org</a></p>
                <p>Phone: <a href="#">6397XXXXXX</a></p>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-white font-bold'>Life at Foodie</h4>
              <a className='text-white' href="#">Explore with Foodie</a>
              <a className='text-white' href="#">Foodie News</a>
            </div>
            </div>
            <div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-white font-bold'>Available in:</h4>
                <a className='text-white' href="#">Saharanpur</a>
                <a className='text-white' href="#">Noida</a>
                <a className='text-white' href="#">Chandigarh</a>
                <a className='text-white' href="#">Bangalore</a>
              </div>
              <div className='text-white flex flex-col gap-2 mt-3 '>
                <h4 className='font-bold'>Follow Us</h4>
                <p className='mb-1'>Stay Connected for offers & updates:</p>
                <div className='flex justify-between text-2xl'>
                <div className='active:scale-90'>
                  <a href=""><FaFacebook /></a>
                </div>
                <div className='active:scale-90'>
                  <a href=""><FaInstagram /></a>
                </div>
                <div className='active:scale-90'>
                  <a href=""><FaXTwitter /></a>
                </div>
                <div className='active:scale-90'>
                  <a href=""><FaSnapchatGhost /></a>
                </div>
                <div className='active:scale-90'>
                  <a href=""><ImYoutube /></a>
                </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className='text-white text-center ml-30 mr-30 border-t-2 border-t-white/30 py-6 flex justify-evenly'>
          <div>
            <h4 className='font-bold text-2xl mt-3'>For better experience, download the Foodie app now</h4>
          </div>
          <div className='flex gap-2'>
            <div>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="play store pic" className='active:scale-98' />
            </div>
            <div>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="app store pic" className='active:scale-98' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
