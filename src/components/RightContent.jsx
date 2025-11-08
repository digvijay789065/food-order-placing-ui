import React from 'react'
import CouponCard from './CouponCard'

const RightContent = () => {

    const discount = [
        {
            head: "PhonPe Discount",
            detail: "Use PhonePe to get free delivery!"
        },
        {
            head: "Paytm Discount",
            detail: "Use Paytm to get 10% off!"
        },
       {
            head: "Amazon Pay Discount",
            detail: "Use Amazon Pay to win a voucher!"
        }
    ]

  return (
    <div>
      <div className='h-150 w-80 bg-white rounded-xl p-5 mt-10 flex flex-col gap-10 drop-shadow-2xl'>
        <div className='flex flex-col items-center'>
            <h4 className='text-2xl font-bold text-red-600'>Apply Coupon</h4>
            <p className='text-gray-600 text-[0.9rem]'>Choose from various coupons</p>
        </div>
           {discount.map((elem, index) =>(
            <CouponCard key={index} head={elem.head} detail={elem.detail} />
           ))}
      </div>
    </div>
  )
}

export default RightContent
