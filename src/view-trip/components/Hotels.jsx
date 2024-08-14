import React from 'react'
import HotelCardItem from './HotelCardItem'

function Hotels({trip}) {
  return (
    <div>
    <h2 className= 'mt-5 font-bold text-xl'> Hotel Recommendation</h2>
    
    <div className= 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
     {trip?.tripData?.hotelOptions?.map((hotel,index)=>(
        <HotelCardItem hotel={hotel}/>
     )
      )}
    </div>
    
    </div>

  )
}

export default Hotels
