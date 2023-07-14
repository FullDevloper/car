import React from 'react'
 import { TestProps } from '@/types'
const Test = ({text}:TestProps) => {
  return (

<div className='flex flex-col w-full p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl'>
<div className='w-full flex justify-between items-start gap-2 '>
             {text}
            </div>

</div>
          


  )
}

export default Test