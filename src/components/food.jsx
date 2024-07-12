import React, { useState } from 'react'
import { data } from '../data/data'
const Food = () => {
  const [food,setfood]=useState(data)
    const filtername = (category)=>{
       setfood(
       data.filter((item)=>{
          return  item.category===category
        })
       );
    };

    const filterprice = (price)=>{
      setfood(
       data.filter((item)=>{
         return  item.price===price
       })
      );
   };
  return (
    <div className='w-full max-w-[1650px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold  text-4xl text-center'>Top Rated Menu Iteam</h1>
        <div className='flex flex-col lg:flex-row justify-between '>
            <div>
              <p className='font-bold text-gray-700'>Filter Type</p>
              <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setfood(data)} className="border  border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white  rounded-xl px-5 py-2">All</button>
                <button onClick={()=>filtername("burger")} className="border  border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white  rounded-xl px-5 py-2">Burger</button>
                <button onClick={()=>filtername("pizza")} className="border  border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white  rounded-xl px-5 py-2">Pizza</button>
                <button onClick={()=>filtername("salad")} className="border  border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white  rounded-xl px-5 py-2">Salad</button>
                <button onClick={()=>filtername("chicken")} className="border  border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white  rounded-xl px-5 py-2">Chicken</button>
              </div>
            </div>
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=>filterprice("$")} className="border  border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white  rounded-xl px-5 py-2">$</button>
                    <button onClick={()=>filterprice("$$")} className="border  border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white  rounded-xl px-5 py-2">$$</button>
                    <button onClick={()=>filterprice("$$$")} className="border  border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white  rounded-xl px-5 py-2">$$$</button>
                    <button onClick={()=>filterprice("$$$$")} className="border  border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white  rounded-xl px-5 py-2">$$$$ </button>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
         {
          food.map((item,index)=>(
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
              <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt="" />
              <div className='flex justify-between  px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p> <span className='bg-orange-500 rounded-full text-white p-1'>{item.price}</span></p>
              </div>
            </div>
          ))
         }
        </div>
    </div>
  )
}

export default Food