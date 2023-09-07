import React from 'react'

const Header = ({title,details}) => {
  return (
    <div class="section-title mt-5">
        <h2>{title}</h2>
        <p>{details}</p>
    </div>
  )
}

export default Header