import { FaLocationDot } from "react-icons/fa6";

const LocationBar = () => {
  return (
    <div>
     <div className='flex items-center justify-center gap-2 h-16 w-80 font-semibold px-5 bg-white rounded-xl'>
      <input name="location" placeholder='Enter your delivery location' className='h-full w-full outline-none' />
       <div className='active:scale-90 flex'>
        <button className='text-yellow-400 text-3xl'><FaLocationDot /></button>
       </div>
     </div>
    </div>
  )
}

export default LocationBar
