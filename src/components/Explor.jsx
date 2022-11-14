import React from 'react'

const Explor = ({placesAPI}) => {
  return (
    <>
        <div className='py-7 sm:py-3'>
            <div className='travigo-container '>
                <div className='flex items-center justify-center mb-7 sm:mb-3'>
                    <h2 className='text-5xl font-bold text-black lg:text-4xl md:text-3xl sm:text-2xl xsm:tex-xl'>Explore The Beauty of World</h2>
                </div>
                <div className='grid grid-cols-4 items-center gap-5 lg:grid-cols-3 sm:grid-cols-2'>
                    {placesAPI?.map((item,index)=>{
                        return(
                            <div key={index} className="flex items-center gap-5 sm:gap-3 cursor-pointer hover:bg-emerald-300 rounded-lg transition-all duration-300 hover:scale-105">
                                <div className='flex items-center'>
                                    <img src={item.placeImg} alt="" className='w-20 h-20 rounded-lg sm:w-16 sm:h-16 filter drop-shadow-lg'/>
                                </div>
                                <div className='flex flex-col text-slate-900'>
                                    <h3 className='text-lg font-bold sm:text-sm'>{item.location}</h3>
                                    <p className='text-sm font-normal'>{item.distance}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Explor