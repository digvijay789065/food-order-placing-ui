import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div>
          <div className='h-14 w-full bg-white flex items-center drop-shadow-xl justify-between'>
          <div>
            <h4 className='text-green-500 font-extrabold text-2xl ml-10'>Foodie</h4>
          </div>
          <div>
            <input className='bg-green-300 h-10 w-140 rounded-full px-20 drop-shadow-xs' type="text" placeholder='Search from over 50+ Restaurants and 650+ Items'/>
          </div>
          <div>
            <h4 className='text-green-500 font-bold text-xl mr-10'>Taste the Tastiest Food</h4>
          </div>
          </div>
        </div>    
    </div>
  )
}

export default Navbar
