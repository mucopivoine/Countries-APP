// import React from 'react'
import React, {useState, useEffect} from 'react'

function Countries() {

   const[countryData, setCountryData] =  useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const countriesPerPage = 15;
   useEffect(() =>{
    fetch('https://restcountries.com/v3/all')
    .then(response => response.json())
    .then(data => setCountryData(data));
   
   
   }, []);
   const indexOfLastCountry = currentPage * countriesPerPage;
   const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
   const currentCountries = countryData.slice(indexOfFirstCountry, indexOfLastCountry);
 
   // Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
  
  return (
      <div>
      <div>
      <div className=" flex justify-between ">
    <h1 className="text-2xl px-10 py-5">View Countries</h1>
    
    <input type="text" name="search" placeholder="Search continent" className="color-black  mt-5 mr-10" list="options"/>
    <datalist id="options">
            <option value="Africa"></option>
            <option value="NorthAmerica"></option>
            <option value="SouthAmerica"></option>
            <option value="Asia"></option>
            <option value="Europe"></option>
            <option value="Australia"></option>
            <option value="Oceania"></option>
          </datalist>
    </div>
   <p className="px-10 py-5 mb-10 text-xl ">Pages</p>
      
    <div className="container items-center justify-center place-items-center md:ml-0 lg:ml-20 ">
      
      <div className="">
        <ul className="flex flex-wrap gap-5 justify-center h-[120px] mx-auto pl-10 place-items-center"> 
          {/* Render countries based on current page */}
          {currentCountries.map(country => (
            <div className="items-center md:w-4/12 lg:w-2/12 justify-center" key={country.name.common}>
              <img src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`} alt={country.name.common} className="w-[250px] items-center h-[120px]"/>
              <strong>{country.name.common}</strong> 
              <p><strong>Capital</strong>: {country.capital}</p>
              <p><strong>Population</strong>: {country.population}</p> 
              <p><strong>Region</strong>: {country.region}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  </div>
       {/* Pagination */}
       
       {countryData.length > 0 && (
        <div className="flex justify-center my-5 mt-96 pt-60">
          <ul className="flex">
            <li className="mx-2 cursor-pointer" onClick={() =>paginate(currentPage - 1)} disabled={currentPage=== 1}>&lt;</li>
            {Array.from({ length: Math.ceil(countryData.length / countriesPerPage) }, (_, index) => (
              <li key={index + 1} className="mx-2 cursor-pointer" onClick={() => paginate(index + 1)}>
                {index + 1}
                
              </li>
            ))}
             <li className="mx-2 cursor-pointer" onClick={() =>paginate(currentPage - 1)} disabled={currentPage=== 1}>&gt;</li>
          </ul>
        </div>
      )}
    </div>
  );
}
      

export default Countries;