import SplitChar from '../components/AnimationComponents/SplitChar'
import HeroLeftText from '../components/HeroComponents/HeroLeftText'
import HeroRightText from '../components/HeroComponents/HeroRightText'

const Hero = () => {
    return (
        <div className='' id='home' >
            <div className="container relative md:h-[100vh] w-[100vw] ">
                <div className="background relative flex flex-col md:flex-row w-[100vw] lg:h-[100vh]">
                    <div className="left-side h-[60vh] lg:h-[100vh] w-[100vw] md:w-[50vw]"></div>
                    <div className="right-side lg:h-[100vh] w-[100vw] md:w-[50vw] overflow-hidden ">
                        <div className="img relative overflow-hidden md:h-[100vh]">
                            <img className='xl:absolute xl:-top-32 object-cover md:h-[100vh] w-full lg:h-auto' src="/Image.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="main-title absolute left-[50%] md:left-[47%] -translate-x-[50%] top-[9%] md:top-[20%]">
                    <SplitChar className='stylish text-6xl min-[376px]:text-[60px] text-[#222222] animated-text'>Saksham</SplitChar>
                </div>
                <div className="overlay absolute top-0 md:bottom-0 flex w-[100vw] md:w-[50vw] px-4 md:px-10">
                    <HeroLeftText />
                    <HeroRightText />
                </div>
            </div>
        </div>
    )
}

export default Hero
