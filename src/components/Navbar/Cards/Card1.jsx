import jalebi from "../../../assets/jalebi.png"
import { FaArrowRight } from "react-icons/fa6";


const Card1 = () => {
  return (
   <div>
    <div className='h-80 overflow-hidden w-[540px] bg-white rounded-2xl drop-shadow-2xl flex flex-col justify-between'>
     <div className='p-5'>
      <h1 className='text-3xl font-bold'>LOCAL FAVOURITES</h1>
      <h3 className='text-2xl font-bold text-gray-500'>FROM LOCAL RESTAURENTS</h3>
      <div className="bg-yellow-400 font-bold  w-fit px-3 py-1 text-white rounded-full mt-1"><h3>UPTO 55% OFF</h3></div>
      </div>
       <img src={jalebi} alt="jalebi"
        className="absolute left-70 top-20 h-80 drop-shadow-2xl drop-shadow-black/25 z-20"/>
       <div className='h-12 active:scale-98 bg-yellow-400 w-[180px] rounded-full ml-5 mb-5'>
      <button className='h-full w-full font-bold text-xl flex items-center justify-center gap-2'>Explore now<FaArrowRight /></button>
     </div>
    </div>
   </div>
  )
}

export default Card1
