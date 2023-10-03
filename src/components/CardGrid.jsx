import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import PageButtonsContainer from './PageButtonsContainer'
import { useParams } from 'react-router-dom'
import { populateInitialProperties } from '../features/cars/propertiesSlice'
import ShowMore from './ShowMore'

const itemsPerPage = 6
const CardGrid = () => {
  const {filtered_properties,search,activeTabIndex,endIndex} = useSelector(state=>state.cars)
  

 const dispatch = useDispatch(state=>state.cars)
  useEffect(()=>{
    dispatch(populateInitialProperties())
  },[activeTabIndex])




  if(filtered_properties?.length > 0){
    return (
      <>
      {filtered_properties && <div className='grid grid-cols-3 mt-[0rem] p-2  place-items-center gap-y-6'>
       {filtered_properties.slice(0,endIndex).map((car)=>{
         
         return <Card {...car}/>
        })}
      </div>}
       {<PageButtonsContainer/>}
        </>
    )
  }

  return (
    <>
    {filtered_properties && <div className='grid grid-cols-3 mt-[10rem] p-2 bg-red-300 place-items-center gap-y-6'>
    
    <h1 className="text-4xl">No results found for {search}</h1>
    </div>}
     
      </>
  )




 


}

export default CardGrid