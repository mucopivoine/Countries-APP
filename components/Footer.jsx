// import React from 'react'
import logoipsum from '/logoipsum.svg'

const Footer = () => {
   return (
    <div className="mt-12">
      <div className="bg-gray-100 flex justify-between max-w-screen py-4  px-20  ">
       <img src={logoipsum}></img>
       <p>Copyright <span>&copy;</span> {new Date().getFullYear()}. All rights reserved.</p>
      </div>
      </div>
   )
 }

 export default Footer