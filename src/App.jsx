import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Regions from '../pages/Regions';
import NotFound from '../pages/NotFound';
import HomeLayout from '../layouts/HomeLayout';
import OtherLayouts from '../layouts/OtherLayouts';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
// import Pagination from './components/Pagination';
// import Footer from './components/Footer';


const App = () => {
  return (
    <div>
    <div>
      {/* <NavBar /> */}
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
        />
        <Route path="/regions" element={
          <OtherLayouts>
            <Regions />
          </OtherLayouts>
        }
        />
        <Route path="*" element={
          <OtherLayouts>
            <NotFound />
          </OtherLayouts>
        }
        />
        <Route path="*" element={
          <Pagination />

        }
        />
         <Route path="*" element={
          <Footer />
        }
        />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App