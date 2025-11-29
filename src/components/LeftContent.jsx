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
  },
    {
      img: "https://atanurrannagharrecipe.com/wp-content/uploads/2023/01/Veg-Manchurian-for-website.jpg",
      name: "Manchurian",
      detail: "",
      price: 119
  },
    {
      img: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/1/mushroom_manchurian.webp",
      name: "Mushroom Manchurian",
      detail: "",
      price: 159
  },  
    {
      img: "https://i.pinimg.com/736x/45/46/d4/4546d46b71b137014a58cdc3b552976c.jpg",
      name: "Chilli Paneer",
      detail: "",
      price: 89
  },
    {
      img: "https://www.gourmetfoodworld.com/images/Product/medium/chicken-dumplings-recipe-1S-12786.jpg",
      name: "Veg Dumplings",
      detail: "",
      price: 139
  },
    {
      img: "https://takestwoeggs.com/wp-content/uploads/2025/05/Cantonese-Chow-Mein-noodle-pull.jpg",
      name: "Chowmein",
      detail: "",
      price: 69
  },
    {
      img: "https://conelmorrofino.com/wp-content/uploads/2022/01/Restaurante-Chino-Dim-Dums-Portada.jpg",
      name: "Dim Sum",
      detail: "",
      price: 139
  },
    {
      img: "https://www.australianeggs.org.au/assets/Uploads/Egg-fried-rice-2.jpg",
      name: "Fried Rice",
      detail: "",
      price: 49
  },
    {
      img: "https://cdn1.foodviva.com/static-content/food-images/soup-recipes/manchow-soup/manchow-soup.jpg",
      name: "Veg Manchow Soup",
      detail: "",
      price: 39
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
      img: "https://easyindiancookbook.com/wp-content/uploads/2023/12/aloo-paratha-1.jpg",
      name: "Aloo Paratha",
      detail: "",
      price: 59
    },
    {
      img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1NJLWr.img?w=768&h=432&m=6",
      name: "Kadhi Chawal",
      detail: "",
      price: 45
    },
    {
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIhLcOIgSfPph9kwyJScX0oZOf9W6XT26Chnlc5uXPP4C8_52cTsozMURL_SDruHd-DQtC9GLHqWKFvqHvnWlsqULIkpwga-6KTUiXW1btD7KQI7oNmljdwykZ1WGZB7QZr8fsqGgqoy4/s2048/paneer+butter+masala+15.JPG",
      name: "Paneer Butter Masala with Naan",
      detail: "",
      price: 129
    },
    {
      img: "https://orders.popskitchen.in/storage/2024/09/image-358.png",
      name: "Paneer Tikka",
      detail: "",
      price: 79
    },
    {
      img: "https://images.indianexpress.com/2019/11/Pinni_759.jpg",
      name: "Pinni",
      detail: "",
      price: 39
    },
    {
      img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-Recipe.jpg",
      name: "Punjabi Samosa",
      detail: "",
      price: 25
    },
    {
      img: "https://mypahadidukan.com/cdn/shop/articles/Kesar_Kheer_Recipe_ad0e3b6b-d2aa-45b9-89e0-a7e986ea0bec.jpg?v=1761216555",
      name: "Kheer",
      detail: "",
      price: 40 
    },
    {
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/phirni-firni-recipe.jpg",
      name: "Phirni",
      detail: "",
      price: 35 
    },
    {
      img: "https://rajjoskitchen.com/wp-content/uploads/2024/02/IMG-20240201-WA0006.jpg",
      name: "Makke Di Roti with Sarson Da Saag",
      detail: "Saag so soulful, roti so earthy—it’s tradition you can taste!",
      price: 55
    }
  ]
  const gujrati = [
    {
      img: "https://i.pinimg.com/736x/76/2b/c7/762bc7aaf3b97d3eadbc27c309714fab.jpg",
      name: "Dhokla",
      detail: "Whole wheat bhature with spicy chickpea curry!",
      price: 59
    },

    {
      img: "https://i.pinimg.com/1200x/7d/09/50/7d0950ded8060a20750a737a73d25f5f.jpg",
      name: "Jalebi Fafda",
      detail: "Crispy jalebis paired with crunchy fafdas for the perfect sweet-savory combo!",
      price: 99
    },
    
    {
      img: "https://i.pinimg.com/736x/ee/18/dd/ee18ddbd952e167606ace8e7d78b5c5a.jpg",
      name: "Thepla",
      detail: "Spiced flatbreads and chutney packed with flavor and tradition!",
      price: 39
    },
    {
      img: "https://i.pinimg.com/736x/53/50/6d/53506d967be6ef522e07f569c8c61d0e.jpg",
      name: "Aam ras and Poori",
      detail: "Creamy mango pulp served with fluffy pooris for a royal treat!",
      price: 139
    },
    {
      img: "https://www.reciperasoi.com/wp-content/uploads/2021/03/Gujarati-Khandvi-Recipe.jpg",
      name: "Khandvi",
      detail: "",
      price: 45
    },
    {
      img: "https://calcuttachow.com/wp-content/uploads/2011/05/dsc09016.jpg",
      name: "Gujrati Kadhi",
      detail: "",
      price: 79
    },
    {
      img: "https://www.puvi.co/uploaded_images/1687505275.png",
      name: "Dal Dhokli",
      detail: "",
      price: 65
    },
    {
      img: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/undhiyu-recipe-5.jpg",
      name: "Undhiyu",
      detail: "",
      price: 89
    },
    {
      img: "https://prashantcorner.com/cdn/shop/files/KesarBasundiSR-3.jpg?v=1718082478",
      name: "Basundi",
      detail: "",
      price: 45
    },
    {
      img: "https://cookingfromheart.com/wp-content/uploads/2017/06/Kutchi-Dabeli-8.jpg",
      name: "Dabeli",
      detail: "",
      price: 50
    },
    {
      img: "https://prashantcorner.com/cdn/shop/files/Kesar_Badam_Shrikhand_-1.jpg?v=1718180042&width=1946",
      name: "Shirkhand",
      detail: "",
      price: 70
    },
    {
      img: "https://vatans.com/wp-content/uploads/2025/01/Vagharelo-Rotlo-A-Taste-of-Tradition-8.png",
      name: "Vagharelo Rotlo",
      detail: "",
      price: 85
    }
  ]
  const SouthInd = [
    {
      img: "https://i.pinimg.com/1200x/d4/d0/55/d4d05510d95f793fd27855bbe5851f20.jpg",
      name: "Masala Dosa",
      detail: "Crispy dosa filled with spicy potato masala!",
      price: 149
    },
    {
      img: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      name: "Plain Dosa",
      detail: "",
      price: 119
    },
    {
      img: "https://www.padhuskitchen.com/wp-content/uploads/2013/03/rava-dosa-3-1.jpg",
      name: "Onion Rava Dosa",
      detail: "",
      price: 99
    },

    {
      img: "https://i.pinimg.com/1200x/d5/cd/da/d5cdda22f2061de591b048b67bbf0e67.jpg",
      name: "Idli Sambar",
      detail: "Spongy idlis served with flavorful sambar and chutneys!",
      price: 119
    },
    
    {
      img: "https://i.pinimg.com/1200x/2d/a9/22/2da922f44fe85bb1e10a981cf43c3f03.jpg",
      name: "Rasam",
      detail: "Tangy and spicy South Indian soup to warm your soul!",
      price: 79
    },
    {
      img: "https://i.pinimg.com/1200x/47/00/cd/4700cd26ed2a7c52b8f3c316bc92cc0f.jpg",
      name: "Medu Vada",
      detail: "Crispy on the outside, soft on the inside lentil doughnuts!",
      price: 109
    },
    {
      img: "https://www.kuchpakrahahai.in/wp-content/uploads/2016/09/Vegetable-rawa-upma.jpg",
      name: "Upma",
      detail: "",
      price: 59
    },
    {
      img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/appam-1.jpg",
      name: "Appam",
      detail: "",
      price: 79
    }
  ]

  //sorting
  const [punjabiData, setPunjabiData] = useState(punjabi);
  const [chineseData, setChineseData] = useState(chinese);
  const [gujratiData, setGujratiData] = useState(gujrati);
  const [SouthIndData, setSouthIndData] = useState(SouthInd);

  //handle sort

  //Increasing order
  const handlePunjabiInc = () =>{
    const sorted = [...punjabiData].sort((a, b) => a.price - b.price)
    setPunjabiData(sorted)
  }

  const handleChineseInc = () =>{
    const sorted = [...chineseData].sort((a, b) => a.price - b.price)
    setChineseData(sorted)
  }
  const handleGujratiInc = () =>{
    const sorted = [...gujratiData].sort((a, b) => a.price - b.price)
    setGujratiData(sorted)
  }
  const handleSouthIndInc = () =>{
    const sorted = [...SouthIndData].sort((a, b) => a.price - b.price)
    setSouthIndData(sorted)
  }

  // decreasing order
  const handlePunjabiDec = () =>{
    const sorted = [...punjabiData].sort((a, b) => b.price - a.price)
    setPunjabiData(sorted)
  }

  const handleChineseDec = () =>{
    const sorted = [...chineseData].sort((a, b) => b.price - a.price)
    setChineseData(sorted)
  }

  const handleGujratiDec = () =>{
    const sorted = [...gujratiData].sort((a, b) => b.price - a.price)
    setGujratiData(sorted)
  }
  const handleSouthIndDec = () =>{
    const sorted = [...SouthIndData].sort((a, b) => b.price - a.price)
    setSouthIndData(sorted)
  }

  return (
    <div className='relative p-10 flex flex-col gap-10 max-w-full'>
        <div className='flex items-center justify-between'>
            <div>
            <h4 className='text-2xl font-bold'>Chinese</h4>
            <p className='text-gray-600'>A world of flavors in every chopstick pick!</p>
            </div>
            <div>
              <button onClick={handleChineseInc} onDoubleClick={handleChineseDec} 
              className="bg-white drop-shadow-xl active:scale-97 hover:bg-gray-100 
              drop-shadow-black/15 rounded-2xl h-10 w-16 flex items-center justify-center">
                Sort <FaSort />
              </button>
            </div>
        </div>
        
          <div className='flex flex-wrap justify-between gap-10 w-full'>
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
            <div className={`fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] 
            md:w-auto transition-all duration-500 ease-in-out transform z-50 
              ${totalItems > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
              <Bottom items={totalItems} price={totalPrice} />  
            </div>
            
        <div className='flex items-center justify-between'>
            <div>
            <h4 className='text-2xl font-bold'>Punjabi</h4>
            <p className='text-gray-600'>Where every bite feels like a warm desi hug!</p>
            </div>
            <div>
              <button onClick={handlePunjabiInc} onDoubleClick={handlePunjabiDec} 
              className="bg-white drop-shadow-xl active:scale-97 hover:bg-gray-100 
              drop-shadow-black/15 rounded-2xl h-10 w-16 flex items-center justify-center">
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
            <div className={`fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%]
             md:w-auto transition-all duration-500 ease-in-out transform z-50 
              ${totalItems > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
              <Bottom items={totalItems} price={totalPrice} />  
            </div>

        <div className='flex items-center justify-between'>
          <div>
           <h4 className='text-2xl font-bold'>South Indian</h4>
           <p className='text-gray-600'>Where every bite feels like a coastal breeze!</p>
          </div>
          <div>
           <button onClick={handleSouthIndInc} onDoubleClick={handleSouthIndDec} 
           className="bg-white drop-shadow-xl active:scale-97 hover:bg-gray-100 drop-shadow-black/15 
           rounded-2xl h-10 w-16 flex items-center justify-center">
            Sort <FaSort />
           </button>
          </div>
        </div>
        <div className='flex flex-wrap justify-between gap-10'>
            {SouthIndData.map((elem, index) =>(
              <Cards key={index}
                  img={elem.img} 
                  name={elem.name} 
                  detail={elem.detail} 
                  price={elem.price} 
                  onAdd={handleAdd}
                  onRemove={handleRemove}/>
            ))}
        </div>
            <div className={`fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-auto 
            transition-all duration-500 ease-in-out transform z-50 
              ${totalItems > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
              <Bottom items={totalItems} price={totalPrice} />  
            </div>

        <div className='flex items-center justify-between'>
          <div>
           <h4 className='text-2xl font-bold'>Gujarati</h4>
           <p className='text-gray-600'>Where sweetness meets simplicity!</p>
          </div>
          <div>
           <button onClick={handleGujratiInc} onDoubleClick={handleGujratiDec} 
           className="bg-white drop-shadow-xl active:scale-97 hover:bg-gray-100 
           drop-shadow-black/15 rounded-2xl h-10 w-16 flex items-center justify-center">
            Sort <FaSort />
           </button>
          </div>
        </div>
        <div className='flex flex-wrap justify-between gap-10'>
            {gujratiData.map((elem, index) =>(
              <Cards key={index}
                  img={elem.img} 
                  name={elem.name} 
                  detail={elem.detail} 
                  price={elem.price} 
                  onAdd={handleAdd}
                  onRemove={handleRemove}/>
            ))}
        </div>
            <div className={`fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-auto 
            transition-all duration-500 ease-in-out transform z-50 
              ${totalItems > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
              <Bottom items={totalItems} price={totalPrice} />  
            </div>
    </div>
  )
}

export default LeftContent
