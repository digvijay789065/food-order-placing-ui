import Header from './Header';
import Card1 from "./Navbar/Cards/Card1";
import Card2 from "./Navbar/Cards/Card2";
import SearchBar from "./Navbar/SearchBar";
import LocationBar from './Navbar/LocationBar';
import { RiArrowUpDoubleLine } from "react-icons/ri";

const Navbar = () => {
  
  const scrollDown = () => {
      window.scrollBy({
        top: 700,        // scroll amount
        behavior: "smooth"
      });
    };

  return (
    <div>
     <div className='relative h-[95vh] w-full bg-yellow-400'>
      <Header />
          
      <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-5 mt-10'>
       <SearchBar />
       <LocationBar />            
      </div>

      <div 
      className='relative z-0 flex flex-wrap gap-20 items-center justify-center mt-16'>
       <Card1 />
       <Card2 />
      </div>
      <div className='text-center'>
        <button className='text-7xl text-white active:scale-90 relative hover:text-gray-200'
          onClick={scrollDown}
          >
        <RiArrowUpDoubleLine />
      </button>
      </div>
     </div>
    </div>
  )
}

export default Navbar
