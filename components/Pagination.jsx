// import React, { useState } from 'react';

// const Pagination = ({ countryData, countriesPerPage, paginate }) => {
//   // const [currentPage, setCurrentPage] = useState(1);
//    const countriesPerPage = 1;
//    const indexOfLastCountry = currentPage * countriesPerPage;
//    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
//    let currentCountries = countryData.slice(indexOfFirstCountry, indexOfLastCountry);
//   // Example state variable for current page (you may have your own state management)
//   // const [currentPage, setCurrentPage] = useState(1);
//    paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <div className="">
//         {/* Pagination */}
//         {countryData.length > 0 && (
//           <ul className="flex">
//             {Array.from({ length: Math.ceil(countryData.length / countriesPerPage) }, (_, index) => (
//               <li key={index + 1} className="mx-2 cursor-pointer" onClick={() => paginate(index + 1)}>
//                 {index + 1}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Pagination;
import React from 'react'

function Pagination() {
  // const indexOfLastCountry = currentPage * countriesPerPage;
  //  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  // const[countryData, setCountryData] =  useState([]);
  // const currentCountries = countryData.slice(indexOfFirstCountry, indexOfLastCountry);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
  
  return (
    <div>Pagination</div>
  )
}

export default Pagination