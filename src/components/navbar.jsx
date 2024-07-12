import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'

function Navbar() {
  const[nav,setnav]=useState(false)
  return (
    <div className='flex max-width-[1640px]  mx-auto justify-between items-center p-4'>
        <div className=' flex  items-center'>
        <div onClick={()=>setnav(!nav)} className='cursor-pointer' >
            <AiOutlineMenu size={30}/>
        </div>
        <h1 className='text-2xl px-2 '>Best <span className='font-bold'>Eats</span> </h1>
        <div className='lg:flex hidden text-sm bg-gray-200 rounded-full'>
            <p className='text-white p-2 rounded-full bg-black'>Delivery</p>
            <p className=' p-2 rounded-full '>Pickup</p>
        </div>
        </div>
        <div className=' bg-gray-200 flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] rounded-full'>
          <AiOutlineSearch size={25}/>
          <input type="text" className=' bg-transparent p-2 w-full focus:outline-none' placeholder='Search Foods' />
         </div>
          <div>
            <button className='border  border-black bg-black text-white hidden md:flex rounded-xl px-5 py-2'>
            <BsFillCartFill size={20} className='mr-2'/>Cart
            </button>
          </div>
          {/* overlay */}
          {nav?<div className='w-full h-screen bg-black/80 fixed top-0 left-0 z-10 '></div>:" "}
          

          
          {/* sidebar */}
          <div className={nav?'w-80 h-screen fixed top-0 left-0 bg-white z-10 duration-300':'w-80 h-screen fixed top-0 left-[-100%] bg-white z-10  duration-300 '}>
            <AiOutlineClose onClick={()=>setnav(!nav)} size={30} className=' absolute top-4 right-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
              <ul className='text-gray-800 flex flex-col p-4'>
                <li className='flex text-xl py-4'><TbTruckDelivery size={25 } className='mr-4'/>Orders</li>
                <li className='flex text-xl py-4'><MdFavorite size={25 } className='mr-4'/>Favorites</li>
                <li className='flex text-xl py-4'><FaWallet size={25 } className='mr-4'/>Wallet</li>
                <li className='flex text-xl py-4'><MdHelp size={25 } className='mr-4'/>Help</li>
                <li className='flex text-xl py-4'><AiFillTag size={25 } className='mr-4'/>Promotions</li>
                <li className='flex text-xl py-4'><BsFillSaveFill size={25 } className='mr-4'/>Best Ones</li>
                <li className='flex text-xl py-4'><FaUserFriends size={25 } className='mr-4'/>Invite Friends</li>

              </ul>
            </nav>
          </div>
    </div>
  )
}

export default Navbar