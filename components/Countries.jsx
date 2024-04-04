// import React from 'react'
import React, {useState, useEffect} from 'react'

function Countries() {

   const[countryData, setCountryData] =  useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const countriesPerPage = 250;
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
      <div className='w-[90%]'>
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
   <p className=" text-xl px-10 pb-10">Pages<span> 1 of 5</span> </p>
      
    <div className="max-w-[90%] justify-items-center ml-10">
      
        <ul className=" md:ml-5 ml-10 flex flex-wrap gap-5 justify-center items-center"> 
          {/* Render countries based on current page */}
          {currentCountries.map(country => (
            <div className=" container md:w-2/12 lg:w-2/12  justify-center" key={country.name.common}>
              <img src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`} alt={country.name.common} className="w-[250px]  h-[150px] "/>
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
  );
}
      

export default Countries;