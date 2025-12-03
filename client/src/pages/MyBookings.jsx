import React, { useState, useEffect } from 'react'
import BlurCircle from '../components/BlurCircle'
import Loading from '../components/Loading'
import { dummyBookingData } from '../assets/assets'

const MyBookings = () => {

  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMyBookings = async () => {
    setBookings(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(() => {
    getMyBookings()
  }, [])

  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <BlurCircle top="100px" left="100px" />
      <div>
        <BlurCircle bottom="0" left="600px" />
      </div>

      <h1 className='text-lg font-semibold mb-4'>My Bookings</h1>

      {bookings.map((item, index) => (
        <div key={index} className='flex flex-col md:flex-row justify-between 
        bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl'>

          <div className='flex flex-col md:flex-row'>
            <img 
              src={item.show.movie.poster_path} 
              alt="" 
              className='md:max-w-45 aspect-video h-auto object-cover object-bottom rounded'
            />

            <div className='flex flex-col p-4'>
              <p className='text-lg font-semibold'>{item.show.movie.title}</p>
              <p className='text-gray-400 text-sm'>{item.show.movie.runtime} mins</p>

              {/* FIXED DATE FORMAT */}
              <p className='text-gray-400 text-sm mt-auto'>
                {new Date(item.show.showDateTime).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric"
                })}
              </p>
            </div>
          </div>

          <div className='flex flex-col md:items-end md:text-right justify-between'>
            <div className='flex items-center gap-4'>
<<<<<<< HEAD
              <p className='text-2xl font-semibold mb-3'>₹{item.amount}</p>
=======
               <p className='text-2xl font-semibold mb-3'>₹{item.amount}</p>
>>>>>>> 6af390f (first commit)

              {!item.isPaid && (
                <button className='bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer'>
                  Pay Now
                </button>
              )}
            </div>

            <div className='text-sm'>
              <p>
                <span className='text-gray-400'>Total Tickets:</span> {item.bookedSeats.length}
              </p>
              <p>
                <span className='text-gray-400'>Seat Number:</span> {item.bookedSeats.join(", ")}
              </p>
            </div>
          </div>

        </div>
      ))}
    </div>
<<<<<<< HEAD
  ) : <Loading />
}

export default MyBookings
=======
   ) : <Loading />
}

export default MyBookings

const dateFormat = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}
>>>>>>> 6af390f (first commit)
