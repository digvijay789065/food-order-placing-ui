import { FaLocationDot } from "react-icons/fa6";

const LocationBar = () => {
  return (
    <div>
     <div className='flex items-center justify-center gap-2 h-12 w-80 font-semibold px-5 bg-white rounded-xl'>
      <input name="location" placeholder='Enter your delivery location' className='h-full w-full outline-none' id="" />
       <div className='active:scale-90'>
        <button className='text-yellow-400'><FaLocationDot /></button>
       </div>
     </div>
    </div>
  )
}

export default LocationBar
