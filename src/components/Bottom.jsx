import React from 'react'
import { Link} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PlaceOrder from './PlaceOrder';

  const Bottom = ({ items, price }) => {
    return (
        <div className='flex justify-center mt-10 drop-shadow-2xl'>
         <div className='h-14 w-[60vw] bg-green-500 drop-shadow-2xl rounded-full flex items-center px-8'>
          <div className='flex flex-row items-center justify-center w-full'>
           <div className='px-10 font-bold text-white'>
            <h4>{items} item | {'\u20B9'}{price }</h4>   
             <div className='uppercase text-blue-600 bg-blue-50/10 cursor-pointer hover:text-blue-800 active:scale-96 transition'>
              <p>view detailed bill</p>
             </div>
           </div>
           <div className='bg-white text-green-600 rounded-full px-5 py-2 ml-[450px] font-bold h-[12] w-43 text-2xl'>
            <button
             className='cursor-pointer active:scale-95 transition'><a href="/placeorder">Place Order</a></button>
           </div>
          </div>
         </div>
         <Routes>
          <Route path='/placeorder' element={<PlaceOrder />} />
         </Routes>
        </div>
    )
  }

  export default Bottom

