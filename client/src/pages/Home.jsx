import React from 'react';
import Annoncement from '../Component/Annoncement';
import Categories from '../Component/Categories';
import Navabar from '../Component/Navabar';
import Slider from '../Component/Slider';
import Products from "../Component/Products"
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';
import Upsale from '../Component/Upsale';
import Landing_image from '../Component/Landing_image';
import GoodQualities from '../Component/GoodQualities';
import Karousel from '../Component/Karousel';
import GoodOrderQualities from '../Component/GoodOrderQualities';







const Home = () => {
  return(
  <div>
  <Annoncement/>
  <Navabar/>
  <Landing_image/>
  <GoodQualities/>
  <Products/>
  <Karousel/>
  <GoodOrderQualities/>
  <Footer/>
  </div>
  );
};
export default Home;
