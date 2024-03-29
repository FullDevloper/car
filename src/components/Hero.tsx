"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero =()=>{
    const HandleSroll=()=>{

    }
    return (
        <div className='hero'><div className='flex-1  pt-36 padding-x  '>
            <h1 className='hero__title' >
                Find, Book, or rent a car - quickly and easily
            </h1>
            
            <p className='hero__subtitle'>Streamline your car rental experience with our effortles booking process.

            </p>
            <CustomButton title="Explore Cars" containerStyles="bg-btn-color text-white rounded-full mt-10" handleClick={HandleSroll}/>
            </div>
            <div className='hero__image-container'>

                <div className='hero__image'>
                <Image src="/hero.png" alt='car' fill className='object-contain'/>
<div className='hero__image-overlay'></div>
                </div>
            </div>
            </div>
        )
}
export default Hero