import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { SplitText } from "gsap/SplitText";


const SplitChar = ({children, className='', delay}) => {
    const charRef = useRef(null);

    useGSAP(() => {
        if(charRef.current){
            const split = new SplitText(charRef.current, { type: "chars", mask: "chars"});

            gsap.from(split.chars, {
                y: 100,
                duration: 1,
                ease: "power3.out",
                stagger: 0.05,
                delay: delay,
            })
        }
    })

  return (
    <h1 ref={charRef} className={className}>{children}</h1>
  )
}

export default SplitChar