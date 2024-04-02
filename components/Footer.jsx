// import React from 'react'
import logoipsum from '/logoipsum.svg'

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-100 flex justify-between p-10">
       <img src={logoipsum}></img>
       <p>Copyright <span>&copy;</span> 2024. All rights reserved.</p>
      </div>
      </div>
  )
}

export default Footer