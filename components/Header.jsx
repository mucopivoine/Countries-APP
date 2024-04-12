
import logoipsum from '/logoipsum.svg'
import earthimage from '/earthimage.webp'
import Mobilelogo from './mobileicon'
// import Navlink from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";


const Header = () => {
  return (
    <section className="lg:w-full mx-auto p-10 bg-[url('/earthimage.webp')]">
      <div className="text-center justify-center ">
      
       <ul className="flex items-center justify-between">
      <li><a href="https://logoipsum.svg" className="text-blue-500 lg:block hidden ">
        <img  className="" src={logoipsum}></img></a></li>
        <li><Mobilelogo/></li>
      <li className="text-white hidden lg:block " id="menu"><a href="/">Countries</a></li>
   <li className="text-white lg:hidden md:block"><CiMenuFries /></li>
                    
    </ul>
    

        <div className=" text-center container h-64 ">
        <h1 className="text-3xl font-bold text-white ">Country API App</h1>
        <p className="mt-4 text-xl text-white">This is a simple app that allows you to search for countries and continents using the API.</p>
        <input type="text" placeholder="Search country by name" className="border-collapse p-4 px-20 mt-4 lg:w-5/12  text-start ">
         
        </input>
        </div>
        </div>
    </section>
  )
}

export default Header