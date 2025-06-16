import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom';
const FeaturedDestination = () => {
  const navigate= useNavigate()
  return (
    <div className='flex flex-wrap items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      
       <div className='w-full text-center'>
      <Title title='Featured Destination' subTitle='Discovered our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'/>
      </div>   
      
      <div className='flex flex-wrap items-center justify-center gap-6 mt-20   w-full text-center'>
              {roomsDummyData.slice(0, 4).map((room, index) => (
                  <HotelCard key={room._id} room={room}  index={{index}}/>
              ))}
      </div>
      <div className='w-full text-center'>
      <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }}
      className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
        View All Destinations
        </button>
        </div>
    </div>
  )
}

export default FeaturedDestination