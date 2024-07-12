import React from 'react'

const Hero = () => {
  return (
    <div className='width-full mx-auto p-4 '>
        <div className='max-h-[500px] relative'>
            <div className='w-full max-h-[500px] h-full flex-col absolute flex justify-center  text-white bg-black/50'>
                <h1 className='px-4 text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods<span className='text-orange-500'>Delivered</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Hero