import React, {useState} from 'react'
import Cards from './Cards'
import Bottom from './Bottom'

const LeftContent = () => {

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // when item is added
  const handleAdd = (price) => {
    setTotalItems(prev => prev + 1);
    setTotalPrice(prev => prev + price);
  }

  // when item is removed
  const handleRemove = (price) => {
    setTotalItems(prev => prev - 1);
    setTotalPrice(prev => prev - price);
  }

  const foods = [
    {
      img: "https://i.pinimg.com/736x/97/77/2d/97772d88bb48cbe5b3ffbcf8f99b1606.jpg",
      name: "Hot Chocolate",
      detail: "Rich, creamy chocolate with steamed milk and whipped cream on top!",
      price: 110
    },

    {
      img: "https://www.livingsmartandhealthy.com/wp-content/uploads/2024/02/rajma-recipe3.jpg",
      name: "Rajma Chawal",
      detail: "North Indian comfort food — kidney beans curry served with rice!",
      price: 60
    },

    {
    img: "https://images.pexels.com/photos/34452165/pexels-photo-34452165.jpeg",
    name: "Grilled Sandwich with Latte",
    detail: "Toasted bread filled with veggies, cheese, and savory seasoning!",
    price: 90
  },
    {
      img: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg",
      name: "Veggie Supreme Burger",
      detail: "Grilled vegetable patty, tangy sauce, and wholesome freshness",
      price: 70
  },
    {
      img: "https://images.pexels.com/photos/33384415/pexels-photo-33384415.jpeg",
      name: "Steamed Classic Momos",
      detail: "Soft, juicy, and simply perfect with spicy chutney!",
      price: 80
  },
    {
      img: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
      name: "Margherita Classic",
      detail: "Fresh mozzarella, tangy tomato sauce, and a hint of basil!",
      price: 160
  },
    {
      img: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg",
      name: "Masala Fries",
      detail: "Indian-style spicy fries with chatpata flavor in every bite!",
      price: 45
  },
    {
      img: "https://b.zmtcdn.com/data/pictures/chains/1/21069601/69d68beaa717415a98b5d077f93445c2.png",
      name: "Amritsari Chole Bhature",
      detail: "A hearty Punjabi favorite with deep, robust flavors and ghee’s aroma!",
      price: 75
  },
    {
      img: "https://bhojmasale.com/cdn/shop/articles/delicious-pav-bhaji-recipe-a-step-by-step-guide-930907_1024x1024.webp?v=1739152900",
      name: "Butter Pav Bhaji",
      detail: "Extra butter, extra love — the way it’s meant to be!",
      price: 60
  }
  
  ]

  return (
    <div className='relative p-10 flex flex-col gap-10 '>
        <div>
            <h4 className='text-2xl font-bold'>Our Menu</h4>
            <p className='text-gray-600'>Choose your favourite dishes and add them to cart</p>
        </div>
        
        <div className='flex flex-wrap justify-between gap-15'>
            {foods.map((elem, index) =>(
              <Cards key={index}
                  img={elem.img} 
                  name={elem.name} 
                  detail={elem.detail} 
                  price={elem.price} 
                  onAdd={handleAdd}
                  onRemove={handleRemove}/>
            ))}
        </div>
            <div className={`fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-auto transition-all duration-500 ease-in-out transform z-50 
              ${totalItems > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
              <Bottom items={totalItems} price={totalPrice} />  
            </div>
    </div>
  )
}

export default LeftContent
