import Header from './Navbar/Header';
import Card1 from "./Navbar/Cards/Card1";
import Card2 from "./Navbar/Cards/Card2";
import SearchBar from "./Navbar/SearchBar";
import LocationBar from './Navbar/Cards/LocationBar';
import { RiArrowUpDoubleLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
     <div className='relative h-[95vh] w-full bg-yellow-400'>
      <Header />
          
      <div className='flex items-center justify-center gap-5 mt-10 drop-shadow-2xl drop-shadow-black/30'>
       <SearchBar />
       <LocationBar />            
      </div>

      <div className='relative z-0 flex gap-20 items-center justify-center mt-16'>
       <Card1 />
       <Card2 />
      </div>
      <div className='flex text-4xl items-center justify-center'>
        <RiArrowUpDoubleLine />
      </div>
     </div>
    </div>
  )
}

export default Navbar
