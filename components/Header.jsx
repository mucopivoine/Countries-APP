
import logoipsum from '/logoipsum.svg'
import earthimage from '/earthimage.webp'

const Header = () => {
  return (
    <section>
      <div className="bg-[url('/earthimage.webp')] bg-no-repeat bg-cover">
       <ul className="flex justify-between p-10  text-white">
      <li><a href="https://logoipsum.svg" className="text-blue-500">
        <img  className="" src={logoipsum}></img></a></li>
      <li className="text-white"><a href="/">Countries</a></li>
    </ul>
        <div className=" text-center container h-64 max-w-full">
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