import React, { useState } from 'react';

const HeadlineCards = () => {
    const [data, setData] = useState([
        
        {
            id: 1,
            title: "Sun's Out, BOGO's Out",
            Subttitle: "Through 8/26",
            imgSrc: "https://images.unsplash.com/photo-1552611052-60b2c00a2be8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            title: "New Restaurants",
            Subttitle: "Added Daily",
            imgSrc: "https://images.unsplash.com/photo-1672305330907-8092be9161ea?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            title: "We Deliver Desert",
            Subttitle: "Tasty Treats",
            imgSrc: "https://plus.unsplash.com/premium_photo-1695582868702-5b0f91584d00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }

     
    ]);

    return (
        <div className='w-full mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {data.map(item => (
                <div key={item.id} className='rounded-xl relative'>
                    <div className='w-full h-full absolute rounded-xl bg-black/50 text-white'>
                        <p className='font-bold text-2xl px-2 pt-4'>{item.title}</p>
                        <p className='px-2'>{item.subttitle}</p>
                        <button className='border-white bg-white rounded-xl px-5 py-2 text-black mx-2 absolute bottom-4'>Order Now</button>
                    </div>
                    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={item.imgSrc} alt={item.title} />
                </div>
            ))}
        </div>
    );
}

export default HeadlineCards;
