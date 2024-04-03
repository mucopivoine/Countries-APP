
import logoipsum from '/logoipsum.svg'
import earthimage from '/earthimage.webp'

const Header = () => {
  return (
    <section className="w-full m-auto border">
      <div className="bg-[url('/earthimage.webp')] bg-no-repeat bg-cover w-[97%] justify-between">
      
       <ul className="p-10 flex justify-between">
      <li><a href="https://logoipsum.svg" className="text-blue-500">
        <img  className="" src={logoipsum}></img></a></li>
      <li className="text-white hidden lg:block" id="menu"><a href="/">Countries</a></li>
      <button id="menu-toggle" className="lg:hidden text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
    </ul>
    

        <div className=" text-center container h-64 ">
        <h1 className="text-3xl font-bold text-white">Country API App</h1>
        <p className="mt-4 text-xl text-white">This is a simple app that allows you to search for countries and continents using the API.</p>
        <input type="text" placeholder="Search country by name" className="border-collapse p-4 px-20 mt-4 lg:w-5/12  text-start ">
         
        </input>
        </div>
        </div>
    </section>
  )
}

export default Header