import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

const AverageRating = (data) => {

  let avg = (data.ratings.reduce((total,amount) => total + amount) / data.ratings.length).toFixed(2)

  return (
    <div>
    Average rating: {avg}
    </div>
  )
}

export default AverageRating