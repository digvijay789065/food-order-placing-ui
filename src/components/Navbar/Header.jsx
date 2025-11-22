import { MdArrowOutward } from "react-icons/md";
import logo from '../../../public/logo.png';

const Header = () => {
  return (
    <div>
     <div className='h-full w-full px-20 py-10'>
      <div className='flex items-center justify-between'>
                  
       <div className="flex items-center gap-1">
        <div className="h-15 object-cover"><img className="h-full" src={logo} alt="" /></div>
        <div><h4 className='text-white text-3xl font-extrabold drop-shadow-xl drop-shadow-black/20'>Foodie</h4></div>
       </div>
                  
       {/* log in and sign up button */}
       <div className='flex items-center gap-5'>
        <h4 className='text-white active:scale-95 font-bold drop-shadow-2xl drop-shadow-black mr-3'><a href="">Contact</a></h4>
        <h4 className='text-white active:scale-95 font-bold drop-shadow-2xl drop-shadow-black mr-8'><a href="">About Us</a></h4>
        <button className='text-white active:scale-98 font-bold text-xl rounded-xl border-2 px-4 py-2 drop-shadow-xl drop-shadow-black/30'>Log in</button>
        <button className='text-white active:scale-98 bg-black border-black font-bold text-xl rounded-xl border-2 px-3 py-2 flex items-center gap-2 drop-shadow-2xl'>Sign Up<MdArrowOutward /></button>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Header