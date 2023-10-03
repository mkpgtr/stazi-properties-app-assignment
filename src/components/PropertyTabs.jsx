import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeEndIndex, handleChange, handleTabChange } from '../features/cars/propertiesSlice'
import { useLocation, useNavigate } from 'react-router-dom'


const PropertyTabs = () => {
    
    const {activeTabIndex,tabOptions} = useSelector((state)=>state.cars)
    
    const tabs = tabOptions
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()


    const handleTabClick = (tab)=>{

    
        
        
        
        dispatch(changeEndIndex(6))
        dispatch(handleTabChange(tab))


        // ! if I am on single property page then I will first navigate to home 

        navigate('/')
        
    }

  return (
    <div className="">
        {tabs.map((tab,index)=>{

            if(tab==='View All'){
                return
            }
            
            if(tab===activeTabIndex){

                // ! when user is on single product page and he clicks the active tab, it must go to home page
                return <a key={index} onClick={()=>navigate('/')} className="tab rounded-2xl btn-primary mr-4">{tab}</a> 
            }

            return <a key={index} className="tab mr-4 rounded-2xl bg-base-300" onClick={()=>{
                handleTabClick(tab)
            }}>{tab}</a> 
        })}
   
  </div>
  )
}

export default PropertyTabs