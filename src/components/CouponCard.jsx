import React from 'react'

const CouponCard = (props) => {
  return (
    <div>
        <div className='flex flex-col justify-between items-center drop-shadow-xl/30 drop-shadow-yellow-500'>
            <div className='bg-yellow-100 border-2 border-yellow-200 h-30 w-60 rounded-xl flex flex-col items-center justify-evenly hover:scale-105 transition-transform duration-300 ease-out '>
                <div className='flex flex-col items-center'>   
                    <h4 className='font-bold text-yellow-600'>{props.head}</h4>
                    <hr className="border-t-2 border-yellow-300 w-8" />
                    <p className='mt-2 text-xs'>{props.detail}</p>
                </div>
                <div>
                    <button className='bg-yellow-300 h-8 w-16 rounded-full font-semibold text-yellow-800 cursor-pointer hover:bg-yellow-400 active:scale-90 transition'>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CouponCard
