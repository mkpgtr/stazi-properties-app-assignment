import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeEndIndex, handleShowMore } from '../features/cars/propertiesSlice'

const ShowMore = () => {

    const {endIndex,filtered_properties} = useSelector(state => state.cars)
    const dispatch = useDispatch()

    useEffect(()=>{
        window.scrollTo({
            top: window.scrollY + 500,
            behavior : 'smooth'
        })

    },[endIndex])

    console.log(endIndex,filtered_properties.length)

    // ! it means that we have come to the end of our show more pagination
    if((endIndex-1)===filtered_properties.length){

        return (
            <div className='mx-auto'>
                <button className='btn btn-primary' onClick={()=>{
                    window.scrollTo({
                        top:10,
                        behavior:'smooth'
                    })
                    // ! after three seconds change end index to nine so that user does not feel that his show more work was wasted.
                    // ! as we give him three more cards already open
                    setTimeout(()=>{
                        // dispatch(changeEndIndex(6))
                      


                   },1000)
                //    dispatch(changeEndIndexToInitialState())
                }}>Scroll To Top</button>
            </div>
          )
    }

  return (
    <div className='mx-auto'>
        <button className='btn btn-primary' onClick={()=>{
            dispatch(handleShowMore())
        }}>Show More</button>
    </div>
  )
}

export default ShowMore