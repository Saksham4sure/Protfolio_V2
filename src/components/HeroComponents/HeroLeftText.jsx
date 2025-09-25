import React, { useRef } from 'react'
import SplitChar from '../AnimationComponents/SplitChar'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroLeftText = () => {
    const line = useRef();

    useGSAP(() => {
        gsap.from(line.current, {
            scaleX: 0,
            duration: 1,
            delay: 1,
            ease: "power3.out",
        })
    })


    return (
        <div className="left-text w-[100vw] md:w-1/2 h-screen">
            <div className='top-text absolute bottom-[65%] min-[376px]:bottom-[63%] md:bottom-[39%]'>
                <SplitChar delay={0.2} className='text-3xl min-[376px]:text-[45px] w-[100vw] leading-[41px] bold'>Frontend</SplitChar>
                <SplitChar delay={0.5} className='text-3xl min-[376px]:text-[45px] w-[100vw] leading-[41px] bold'>Developer</SplitChar>
                <SplitChar delay={0.7} className='text-xl min-[376px]:text-3xl w-[100vw] light'>—still figuring it out.</SplitChar>
                <div ref={line} className='bg-[#222222] w-[260px] h-[1px] absolute top-[120px] rounded-full origin-left'></div>
            </div>
            <div className="bottom-text absolute bottom-[58%] min-[376px]:bottom-[54%] md:bottom-[4%]">
                <SplitChar delay={0.7} className='text-lg'><span>&rarr;</span> Get in touch</SplitChar>
            </div>
        </div>
    )
}

export default HeroLeftText
