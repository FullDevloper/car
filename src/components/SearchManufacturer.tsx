"use client"
import React,{Fragment, useState} from 'react'
import { Combobox,Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/types/contasts'
import Image from 'next/image'
const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  const [query,setQuery]=useState("")
  const filteredManufacturers= query === "" ? manufacturers : manufacturers.filter((item)=>(
    item.toLowerCase().replace(/\s+/g,"")
    .includes(query.toLowerCase().replace(/\s+/g,""))

  ))
    return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
    <div className='relative w-full'>

        <Combobox.Button className="absolute top-[11px]">
            <Image src="/car-logo.svg" width={30} height={41} className='ml-4' alt="Car logo"/>

        </Combobox.Button>
        <Combobox.Input className="search-manufacturer__input"
        placeholder='Volkswagen'
        displayValue={(manufacturer:string)=>
            manufacturer
        }
        onChange={(e)=>setQuery(e.target.value)}
        />
        <Transition as={Fragment}
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        afterLeave={()=>setQuery('')}
        >
            <Combobox.Options>

                {filteredManufacturers.length ===0 && query !== "" ? (
                    <Combobox.Option value={query} className="search-manufacturer__option">
                        Create "{query}"
                    </Combobox.Option>
                ): (
                    filteredManufacturers.map((item)=>(
                        <Combobox.Option value={item} key={item} className={({active})=> `relative search-manufacurer__option ${active ? 'bg-primary-blue text-white':'text-gray-900'}`}>
 {({ active, selected }) => (
              <li
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
      
                {item}
              </li>
            )}
                        </Combobox.Option>
                    ))
                )}
            </Combobox.Options>
        </Transition>
    </div>

        </Combobox>
    </div>
  )
}

export default SearchManufacturer