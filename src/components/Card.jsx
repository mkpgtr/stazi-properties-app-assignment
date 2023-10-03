import React, { useEffect, useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiBed,BiBath} from 'react-icons/bi'
import {FaHotel} from 'react-icons/fa6'
import {CiLocationOn} from 'react-icons/ci'
import {BsArrowsMove} from 'react-icons/bs'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getRandomImage } from '../utils/random'
import { isRejected } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { handleTabChange } from '../features/cars/propertiesSlice'

const Card = ({id,propertyLocation,isPopular,rooms,bed,bath,sft,propertyImage,propertyAddressLg,propertyAddressSm,propertyFor}) => {

  const [isImageRandom,setIsRandomImage] = useState(false)

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
 
    if(!propertyImage && location.pathname.startsWith('/property')){
      setIsRandomImage(true)
    }else{
      setIsRandomImage(false)
    }
  },[])

  const randomImage = getRandomImage()
  console.log(propertyLocation)
  return (
   <>
   {isImageRandom && <h1 className='text-center text-red-500 text-sm' >Certain images are randomly generated on every render <br /> this might not be the image you clicked on. Please visit <br />  <span className='font-bold text-primary underline cursor-pointer' onClick={()=>{
    navigate('/')
    dispatch(handleTabChange('Paris'))
   }}>Paris</span> Tab to see the proper functioning of<br />Single Property page </h1>}
    <Link to={`/property/${id}`}>
    <div className="card w-[27rem] bg-base-100 shadow-xl">
  <figure className="px-3 pt-10  ">
 
   <div className='relative'>
  
   
   <div className='relative'>
   <img src={propertyImage ? propertyImage : randomImage} alt="Shoes" className="rounded-xl object-cover" />
   {isPopular &&  <div className="  bg-primary p-2  left-0 badge-outline absolute z-40 rounded-md bottom-1 ">
      <span className='text-white text-md p-4 '>Popular</span>
    </div>}
   </div>
    <button className='btn ml-3 absolute top-2 right-3 rounded-full'><AiOutlineHeart /></button>
    {propertyFor==='Sale' ? <button className='btn ml-3 absolute top-2 left-3 rounded-3xl'>For Sale</button>
    :<button className='btn ml-3 absolute top-2 left-3 rounded-3xl'>For Rent</button>  
  
  }
   </div>
    
  </figure>
  
  
  <div className="card-body items-start justify-start flex flex-col w-full " >
  
 
    <span className='flex items-center gap-3 text-sm'><CiLocationOn />{propertyAddressSm ? propertyAddressSm : '8558 Green Rd'}</span>
    <h2 className="card-title text-left text-sm">{propertyAddressLg ? propertyAddressLg : 'RCE Theatres - 907 S Beckford Dr,Henderson,NC 27536'}</h2>
  </div>

    {/* <span className='ms-auto text-lg'>{id}</span> */}

  <div className="grid grid-cols-4 px-8">
    <div className='flex flex-col items-center'>
      <div><FaHotel/></div>
      <div><div className="text-sm">
      {rooms ? rooms : 3} Room</div></div>
    </div>
    <div className='flex flex-col items-center'>
    <div><BiBed/></div>
      <div><div className="text-sm">
      {bed ? bed : 4} Bed
        </div></div>
    </div>
    <div className='flex flex-col items-center'>
      <div>{<BiBath/>}</div>

      <div><div className="text-sm">
      {bath ? bath : 1} Bath</div></div>
    </div>
   
    <div className='flex flex-col items-center'>
      <div>{<BsArrowsMove/>}</div>

      <div><span className='text-sm'>{sft ? sft : 732} sft</span></div>
    </div>

    {/* divider */}

  </div>
    {/* <div className="divider"></div> */}
    <hr className='mt-3'/>

    <div className='px-8 py-4 rounded-lg flex items-center '>
        {/* PRICE */}
        <div><span className='text-2xl text-primary'>$440</span>/month</div>
        {/* BUTTONS */}
        <div className='ms-auto'>
            {/* heart */}
           
            <button className='btn ml-3 btn-outline rounded-3xl text-primary'>Read More</button>
            {/* rent now */}
        </div>
    </div>
</div>
    </Link>
   </>
  )
}

export default Card