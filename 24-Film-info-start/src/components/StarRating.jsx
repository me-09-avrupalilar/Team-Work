import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const StarRating=({rate})=> {
  console.log(rate)
  const [rating, setRating] = useState(0)
  const number=Math.floor(rate)
console.log(number)
  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  // const onPointerEnter = () => console.log('Enter')
  // const onPointerLeave = () => console.log('Leave')
  // const onPointerMove = (value: number, index: number) => console.log(value, index)

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        // onPointerEnter={onPointerEnter}
        // onPointerLeave={onPointerLeave}
        // onPointerMove={onPointerMove}
        /* Available Props */
      />
    </div>
  )
}
export default StarRating