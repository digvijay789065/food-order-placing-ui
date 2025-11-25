import { BiSolidSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
   <div>
      <div className="h-16 w-130 px-4 bg-white rounded-xl flex items-center gap-2">
     <input name="search" placeholder='Search from over 50+ Restaurants' className='h-full w-full md:w-[80vw] font-semibold outline-none' id="" />
     <div className='active:scale-90 flex'>
      <button className='text-3xl text-yellow-400'><BiSolidSearchAlt2 /></button>
     </div>
    </div>
   </div>
  )
}

export default SearchBar
