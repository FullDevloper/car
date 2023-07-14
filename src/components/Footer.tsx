import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/types/contasts'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-200'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>

       <div className='flex flex-col justify-start items-start gap-6'>    
        <Image src="/logo.svg" alt='Car Hub' className='object-contain' width={118} height={16}/>
        <p className='text-base text-gray-700 '>CarHub 2023 <br/>
        All right reserved &copy;
        </p>
       </div>
       <div className='flex-1 flex sm:justify-end justify-end flex-wrap max-md:mt-10 gap-20'>
    {

      footerLinks.map((link)=>(
        <div key={link.title} className='footer__link'>
          <h3 className='font-bold'>{link.title}</h3>
          
          {link.links.map((item )=>(
            <Link key={item.title} className='text-gray-500' href={item.url}>

            { item.title}
            </Link>
          ))}


        </div>
      ))
}
       </div>
     

      </div>
      <div className='flex  justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
<p>@2023 CarHub. All Rights Reserved</p>
<div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
<Link className='text-gray-500' href="/">
Privacy Policy
</Link>
<Link className='text-gray-500' href="/">
Terms of Use
</Link>
</div>
</div>
    </footer>
  )
}

export default Footer