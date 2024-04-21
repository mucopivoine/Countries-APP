// import React from 'react'
import logoipsum from '/logoipsum.svg'
import Mobilelogo from './mobileicon'
const Footer = () => {
   return (
    <div>
      <section className='bg-gray-200 h-24'>
        <div className='mx-auto py-3 sm:py-8  sm:px-0 lg:px-8'>
        <div className='lg:justify-between md:justify-center sm:justify-start lg:items-center'>
        <ul className="flex items-center justify-between">
         <li> <Mobilelogo /></li>
         <li className="hidden lg:block "><a href=""></a><img src={logoipsum} className="hidden lg:block "></img></li>
           <li className=''><p>Copyright <span>&copy;</span> {new Date().getFullYear()}. All rights reserved.</p></li>
           <li></li>
        </ul>
        </div>
        </div>

      </section>

    </div>
  //  <section className='lg:w-[100%] md:w-[768px] sm:w-[648px]'>
  //    <div className='text-center justify-center'>
  //     <div className=" bg-gray-200 lg:p-5 md:p-1 justify-between w-full ">
  //       <ul className="flex items-center justify-between">
  //       <li> <Mobilelogo /></li>
  //         <li className="hidden lg:block"><img src={logoipsum} className="hidden lg:block"></img></li>
  //         <li><p>Copyright <span>&copy;</span> {new Date().getFullYear()}. All rights reserved.</p></li>
  //         <li></li>
  //      </ul>
       
  //     </div>
  //     </div>
  //     </section>
   )
 }

 export default Footer