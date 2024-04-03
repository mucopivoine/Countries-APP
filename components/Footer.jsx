// import React from 'react'
import logoipsum from '/logoipsum.svg'

const Footer = () => {
   return (
    <div className="w-full items-center mt-20 mx-auto">
      <div className="bg-gray-200 text-center p-7 flex justify-between ">
       <img src={logoipsum}></img>
       <p>Copyright <span>&copy;</span> {new Date().getFullYear()}. All rights reserved.</p>
      </div>
      </div>
   )
 }

 export default Footer