import React from 'react'

const SectionTitle = ({heading,paragraph}) => {
  return (
    <div>

      <div className='flex flex-col items-center mt-10'>
      <h1 className='text-4xl font-bold'>{heading}</h1>
        <p className='text-sm text-center mt-3  max-w-[25rem]'>{paragraph}</p>
      </div>
    </div>
  )
}

export default SectionTitle