import React, { useState } from "react";

const Cards = (props) => {
  const [num, setNum] = useState(0);

  const AddNum = () => {
    setNum(prev => prev+1);
    props.onAdd(props.price);  {/*notfiy parents about added items*/}
  }

  const RemoveNum = () => {
    if (num === 0) return; // stop right there, no negatives
    setNum(prev => prev - 1);
    props.onRemove(props.price);

  }

  return (
    <div className="drop-shadow-2xl">
      <div className="h-80 w-[320px] bg-white flex flex-col justify-between rounded-xl overflow-hidden hover:scale-115 transition-transform duration-300 ease-out">
        
        <div>
          <img
            src={props.img} 
            alt="food-pic"
            className="h-50 w-full object-cover"/>
        </div>

        <div className="px-6 mb-5">
          
          <div className="flex flex-col">
            <h4 className="font-bold">{props.name}</h4>
            <p className="text-gray-700 text-[13px]">{props.detail}</p>
          </div>

          <div className="flex justify-between">
            <div>
              <h4 className="font-semibold text-green-500 text-lg">
                {'\u20B9'}{props.price}
              </h4>
            </div>



            <div className="flex justify-between gap-1">
            
              <div  
                onClick={RemoveNum}
                className="h-6 w-6 flex justify-center items-center bg-black text-white rounded-sm font-bold text-lg cursor-pointer hover:bg-gray-800 active:scale-90 transition">
                <button className="outline-none">-</button>
              </div>

              <div className="h-6 w-6 px-2 bg-black text-white rounded-xs font-bold">
                {num}
              </div>

              <div  
                onClick={AddNum}
                className="h-6 w-6 flex justify-center items-center bg-black text-white rounded-sm font-bold text-lg cursor-pointer hover:bg-gray-800 active:scale-90 transition">
                <button className="outline-none">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
