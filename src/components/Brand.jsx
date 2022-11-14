import React from 'react'

const Brand = ({brands}) => {
    
  return (
    <div className='flex items-center justify-between gap-7 md:gap-3 my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden'>
        {brands.map((item,index)=>{
            return(
                <img src={item.iconSrc} alt="" key={index} className="w-44 h-auto xl:w-36 lg:w-28 object-fill hover:scale-105 transition-all"/> 
            )
        })}
    </div>
  )
}

export default Brand