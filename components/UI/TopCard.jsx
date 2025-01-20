import React from 'react'

const TopCard = ({title}) => {
  return (
    <div className='bg-secondary h-80  flex flex-col justify-center items-center bg-gradient-to-tr from-[#61045f] to-[#aa076b]'>
            <h2 className='text-4xl font-bold text-white uppercase text-center'>{title}</h2>
    </div>
  )
}

export default TopCard