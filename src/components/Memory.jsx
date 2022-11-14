import React from 'react'
import img2 from '../images/memory.png'

const Memory = ({memory:{title,subtitle,text,img,experience}}) => {
  return (
    <>
      <div className='py-10 sm:py-3'>
        <div className='travigo-container'>
          <div className='flex items-center justify-between gap-[30px] lg:flex-col-reverse'>
            <div className="flex-[2]">
              <img src={img} alt="memory" />
            </div>
            <div className=' flex-[3]'>
              <h2 className='text-5xl font-bold text-black lg:text-4xl md:text-5xl sm:text-3xl xsm:text-2xl'>{title}</h2>
              <h2 className='text-5xl font-bold text-black lg:text-4xl md:text-5xl sm:text-3xl xsm:text-2xl'>{subtitle}</h2>
              <p className='text-base sm:text-sm py-7'>{text}</p>
              <div className='flex items-center justify-between gap-3 sm:flex-wrap'>
                {experience?.map((item,index)=>{
                  return(
                    <div key={index} className=" w-full bg-gradient-to-b from-emerald-500 to-emerald-300 flex items-center justify-center flex-col py-4 cursor-pointer hover:scale-105">
                      <h3 className=' font-bold text-black text-[16px]'>{item.number}</h3>
                      <span>{item.title}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Memory