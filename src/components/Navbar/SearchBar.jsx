import { TbSearch } from "react-icons/tb";

const SearchBar = () => {
  return (
   <div>
      <div className="h-12 w-[480px] px-4 bg-white rounded-xl flex items-center gap-2">
     <input name="search" placeholder='Search from over 50+ Restaurants' className='h-full w-full md:w-[80vw] font-semibold outline-none' id="" />
     <div className='active:scale-90'>
      <button className='text-gray-600'><TbSearch /></button>
     </div>
    </div>
   </div>
  )
}

export default SearchBar
