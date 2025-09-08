import React from 'react'

const HeroLeftText = () => {
    return (
        <div className="left-text w-[100vw] md:w-1/2 h-screen">
            <div className='top-text absolute bottom-[65%] min-[376px]:bottom-[63%] md:bottom-[39%]'>
                <h1 className='text-3xl min-[376px]:text-[45px] w-[100vw] leading-[41px] bold'>Frontend</h1>
                <h1 className='text-3xl min-[376px]:text-[45px] w-[100vw] leading-[41px] bold'>Developer</h1>
                <p className='text-xl min-[376px]:text-3xl w-[100vw] light'>—still figuring it out.</p>
                <div className='bg-[#222222] w-[260px] h-[1px] absolute top-[120px] rounded-full'></div>
            </div>
            <div className="bottom-text absolute bottom-[58%] min-[376px]:bottom-[54%] md:bottom-[4%]">
                <p className='text-lg'><span>&rarr;</span> Get in touch</p>
            </div>
        </div>
    )
}

export default HeroLeftText
