import React from 'react'
import SectionTitle from './SectionTitle'
import PropertyTabs from './PropertyTabs'
import { useDispatch, useSelector } from 'react-redux'
import { changeEndIndex, handleTabChange } from '../features/cars/propertiesSlice'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const PropertyHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const hideHeader = location?.pathname.startsWith('/property')

  console.log(location)
  const {properties,activeTabIndex} = useSelector(state=>state.cars)
  return (
    <>

 { !hideHeader && <div className='mb-[2rem] flex justify-center '>
        <SectionTitle heading={'Featured Properties'} paragraph={'Real estate can be bought sold, leased, rented and can be a valuable investment opportunity.The value of real estate can be..'}/>
    </div>}
    <div className='flex mx-16 py-8 mb-1'>

        <PropertyTabs />

        <button className="btn btn-primary ms-auto mr-10 rounded-3xl" onClick={()=>{
          dispatch(handleTabChange('View All'))
          // dispatch(changeEndIndex(properties?.length - 1))
          navigate('/')
         
        }} disabled={activeTabIndex==='View All'} >View All</button>
    </div>
    </>
  )
}

export default PropertyHeader