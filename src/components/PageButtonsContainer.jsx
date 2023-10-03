import { current } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handlePageButtonClick } from '../features/cars/propertiesSlice'
import { useNavigate } from 'react-router-dom'
import ShowMore from './ShowMore'


const PageButtonsContainer = () => {

  const {cars,carsPerPage,page,totalCars} = useSelector(state=>state.cars)
  const dispatch = useDispatch()

  const [currentPage,setCurrentPage] = useState(page)
  const navigate = useNavigate()
  

  const startIndex = (currentPage - 1) * carsPerPage
  const endIndex = startIndex + carsPerPage


  const totalPages = Math.ceil(totalCars / carsPerPage);
  

  const handleClick = (pageNumber)=>{
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      dispatch(handlePageButtonClick(pageNumber))
      navigate(`/page/${pageNumber}`)
      
    }
  }

  return (
    <div className="navbar bg-base-100 mb-1">
  
  <div className="flex px-4 w-full">
   {/* BUTTONS */}

    <ShowMore />
   
  </div>
</div>
  )
}

export default PageButtonsContainer