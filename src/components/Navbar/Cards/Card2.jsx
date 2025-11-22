import pizza from '../../../assets/pizza.png'
import { FaArrowRight } from "react-icons/fa6";

const Card2 = () => {
  return (
    <div>
     <div className='h-80 overflow-hidden w-[540px] bg-white rounded-2xl drop-shadow-2xl flex flex-col justify-between'>
      <div className='p-5'>
       <h1 className='text-3xl font-bold'>PURE VEGETARIAN</h1>
       <h3 className='text-2xl font-bold text-gray-500'>100% VEG FOOD</h3>
       <div className="bg-yellow-400 font-bold  w-fit px-3 py-1 text-white rounded-full mt-1"><h3>UPTO 45% OFF</h3></div>
        <img src={pizza} alt="pizza"
        className="absolute h-80 top-20 -right-45 drop-shadow-xl drop-shadow-black/25 z-10"/>    
       </div>
      <div className='h-12 active:scale-98 bg-yellow-400 w-[180px] rounded-full ml-5 mb-5'>
       <button className='h-full w-full font-bold text-xl flex items-center justify-center gap-2'>Explore now<FaArrowRight /></button>
     </div>
    </div>
   </div>
  )
}

export default Card2
