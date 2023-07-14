import { Hero } from '@/components'
import Image from 'next/image'
import {SearchBar,CusmtomFilters} from '@/components'
import { HomeProps } from '@/types'
import { fetchCars } from '@/utils'
import {CarCard} from '@/components'
import Test from '@/components/Test'
import ShowMore from '@/components/ShowMore'
import { yearsOfProduction,fuels } from '@/types/contasts'
export default async function Home({searchParams}:HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  // console.log(allCars)
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  return (
    <main className="overflow-hidden">
   <Hero/>

<div className='mt-12 padding-x padding-y max-width' id='discover'>

  <div className='home__text-container'>

<h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
<p>Explore nthe cars you might like</p>
  </div>
  <div className='home__filters'>
    <SearchBar/>
    <div className='home__filter-container'>
    <CusmtomFilters title="fuel" options={fuels}/>
    <CusmtomFilters title="year" options={yearsOfProduction}/>

    </div>
  </div>
  {
    !isDataEmpty ? (
      <section>
    <div className='home__cars-wrapper'>

{allCars?.map((car)=>(<CarCard key={car.year} car={car}/>))}
    </div>
    <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
      </section>
    ):(
      <div className='home__error-container'>
        <h2  className='text-black text-xxl font-bold'>Уучаарай хоосон байна.</h2>
        <p>{allCars?.message}</p>
      </div>
    )
  }
 

</div>

    </main>
  )
}
