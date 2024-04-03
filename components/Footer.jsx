// import React from 'react'
import logoipsum from '/logoipsum.svg'

const Footer = () => {
   return (
    <div className="">
      <div className="bg-gray-100 flex items-center   ">
       <img src={logoipsum}></img>
       <p>Copyright <span>&copy;</span> {new Date().getFullYear()}. All rights reserved.</p>
      </div>
      </div>
   )
 }

 export default Footer