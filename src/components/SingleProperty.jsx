import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useLocation, useParams } from 'react-router-dom'
import properties from '../data/properties.json'
import { useSelector } from 'react-redux'
const SingleProperty = () => {


  const [singleProperty,setSingleProperty] = useState()
  const {activeTabIndex} = useSelector(state=>state.cars)

  const location = useLocation()
  


  const id = useParams().id

  // if(singleProperty?.propertyLocation===activeTabIndex && location.pathname.startsWith('/property')){
  //   alert('yes')
  // }
  
  useEffect(()=>{
    const property = properties.find(property=>property?.id===parseInt(id))
    
    console.log(parseInt(id))


  console.log(property)
  setSingleProperty(property)

  },[id])
  return (
    <div className='w-full  flex justify-center flex-col items-center'>

        {singleProperty && <div>
          <Card {...singleProperty}/>  
        </div>}
    </div>
  )
}

export default SingleProperty