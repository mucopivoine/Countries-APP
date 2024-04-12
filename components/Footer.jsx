// import React from 'react'
import logoipsum from '/logoipsum.svg'
import Mobilelogo from './mobileicon'
const Footer = () => {
   return (
    <div className=" container ">
     
      <div className="container bg-gray-200 mx-auto p-7 sm:text-center ">
        <ul className="flex justify- items-center ">
        <li> <Mobilelogo /></li>
          <li className="hidden lg:block"><img src={logoipsum} className="hidden lg:block"></img></li>
          <li><p>Copyright <span>&copy;</span> {new Date().getFullYear()}. All rights reserved.</p></li>
       </ul>
       </div>
      </div>
   )
 }

 export default Footer