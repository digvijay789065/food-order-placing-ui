import React, {useState} from 'react'
import Cards from './Cards'
import Bottom from './Bottom'
import { FaSort } from "react-icons/fa";

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

  const chinese = [
    {
      img: "https://images.pexels.com/photos/17748108/pexels-photo-17748108.jpeg",
      name: "Spring Rolls",
      detail: "Crispy golden pockets stuffed with irresistible flavor!",
      price: 79
    },
    
    {
      img: "https://images.pexels.com/photos/14457500/pexels-photo-14457500.jpeg",
      name: "Hakka Noodles",
      detail: "Wok-tossed noodles with veggies, crunch, and pure craving!",
      price: 129
    },
    
    {
      img: "https://i0.wp.com/ahappytreat.com/wp-content/uploads/2020/07/DSC_0011.jpg?fit=6000%2C4000&ssl=1",
      name: "Momos",
      detail: "Toasted bread filled with veggies, cheese, and savory seasoning!",
    price: 59
  },
    {
      img: "https://static.toiimg.com/photo/52532656.cms",
      name: "Chilli Potato",
      detail: "Crispy potatoes tossed in a fiery, tangy chilli glaze!",
      price: 99
  }
  ]
  const punjabi = [
    {
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/5/20/1836c4eb-9842-4d9d-9706-e90efbc4c9fc_d618e07c-10a8-4256-a5fc-015774636812.jpg",
      name: "Chole Bhature",
      detail: "Whole wheat bhature with spicy chickpea curry!",
      price: 110
    },

    {
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/11/23/1deb7e07-ca72-4f16-b603-613afcf208d1_c58f1c08-0ddb-468e-b729-db210df2e90c.jpg",
      name: "Chole Kulche",
      detail: "Soft kulchas stuffed with potatoes, cheese and spices paired with spicy chole!",
      price: 99
    },
    
    {
      img: "https://img1.wsimg.com/isteam/ip/69c5d1a9-757f-4d7c-b40c-38248cd92eae/download%20-%202024-08-21T113828.574.png",
      name: "Dal Makhani",
      detail: "The queen of Punjabi plates—smooth, smoky, perfect!",
      price: 119
    },
    {
      img: "https://rajjoskitchen.com/wp-content/uploads/2024/02/IMG-20240201-WA0006.jpg",
      name: "Makke Di Roti with Sarson Da Saag",
      detail: "Saag so soulful, roti so earthy—it’s tradition you can taste!",
      price: 159
    }
  ]

  //sorting
  const [punjabiData, setPunjabiData] = useState(punjabi);
  const [chineseData, setChineseData] = useState(chinese);

  //handle sort
  const handlePunjabiInc = () =>{
    const sorted = [...punjabiData].sort((a, b) => a.price - b.price)
    setPunjabiData(sorted)
  }

  const handleChineseInc = () =>{
    const sorted = [...chineseData].sort((a, b) => a.price - b.price)
    setChineseData(sorted)
  }
  const handlePunjabiDec = () =>{
    const sorted = [...punjabiData].sort((a, b) => b.price - a.price)
    setPunjabiData(sorted)
  }

  const handleChineseDec = () =>{
    const sorted = [...chineseData].sort((a, b) => b.price - a.price)
    setChineseData(sorted)
  }

  return (
    <div className='relative p-10 flex flex-col gap-10 '>
        <div className='flex items-center justify-between'>
            <div>
            <h4 className='text-2xl font-bold'>Chinese</h4>
            <p className='text-gray-600'>A world of flavors in every chopstick pick!</p>
            </div>
            <div>
              <button onClick={handleChineseInc} onDoubleClick={handleChineseDec} className="bg-white drop-shadow-xl active:scale-97 hover:bg-gray-100 drop-shadow-black/15 rounded-2xl h-10 w-16 flex items-center justify-center">
                Sort <FaSort />
              </button>
            </div>
        </div>
        
        <div className='flex flex-wrap justify-between gap-5'>
            {chineseData.map((elem, index) =>(
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
        <div className='flex items-center justify-between'>
            <div>
            <h4 className='text-2xl font-bold'>Punjabi</h4>
            <p className='text-gray-600'>Where every bite feels like a warm desi hug!</p>
            </div>
            <div>
              <button onClick={handlePunjabiInc} onDoubleClick={handlePunjabiDec} className="bg-white drop-shadow-xl active:scale-97 hover:bg-gray-100 drop-shadow-black/15 rounded-2xl h-10 w-16 flex items-center justify-center">
                Sort <FaSort />
              </button>
            </div>
        </div>
        
        <div className='flex flex-wrap justify-between gap-10'>
            {punjabiData.map((elem, index) =>(
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
