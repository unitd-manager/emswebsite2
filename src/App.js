import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../src/screens/Home";
import Engalaipatri from "../src/screens/engalaipatri.js";
import Education from "./Education/Education.js";
import DetailPage from "../src/screens/DetailPage";
import Engalaipatricategory from "../src/screens/engalaipatricategory";
import EngalaipatriSubcategory from "../src/screens/EngalaipatriSubcategory";
import Vahthathul1 from "./Vahthathulvujooth/Vahdhathulujjuth.js";
import GyanaAgamiyangal from "./Gyanagamiyangal/gyanagamiyangal.js";
import Manitha from "./Manitha/manitha.js";
import Category from "./Vahthathulvujooth/categoryDetails.js";
import Category2 from "./Gyanagamiyangal/categoryDetails2.js";
import Category3 from "./Manitha/categoryDetails3.js";
import VahtahthulSub from "./Vahthathulvujooth/VahthathulvujoothSub.js";
import ManithaSub from "./Manitha/ManithaSub.js";
import GyanaSub from "./Gyanagamiyangal/gyanaSub.js";
import Kalvicategory from "./Education/EducationCategory.js";
import KalviSubCategory from "./Education/EducationSub.js";
import PechuPottigal from "./Vahthathulvujooth/pechupottigalsub.js";
import Kanoligal from "./Vahthathulvujooth/kanoligalsub.js";
import ShopDetails from "./BookShop/ShopDetails.js"
import Cart from "./BookShop/Cart.js";
import CheckOut from "./BookShop/CheckOut.js";
import Login from "./auth/Login.js";
import Register from "./auth/Register";
import Thoguppugalcategory from "../src/screens/thoguppugalcategory";
import Thoguppugal from "../src/screens/thoguppugal";
import ThoguppugalSubCategory from "../src/screens/ThoguppugalSubcategory";

import ShopList from "./BookShop/ShopList";
import Contact from "./screens/contact.js";
import Footer from "./header/Footer"
import Header from "./header/Header"

import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/fontawesome.min.css'
import '../src/assets/css/magnific-popup.min.css'
import '../src/assets/css/slick.min.css'
import '../src/assets/css/style.css'
import '../src/assets/css/style.css.map'
import '../src/assets/fonts/fontawesome/fa-brands-400.ttf'
import '../src/assets/fonts/fontawesome/fa-brands-400.eot'
import '../src/assets/fonts/fontawesome/fa-brands-400.woff'
import '../src/assets/fonts/fontawesome/fa-brands-400.woff2'
import '../src/assets/fonts/fontawesome/fa-duotone-900.eot'
import '../src/assets/fonts/fontawesome/fa-duotone-900.ttf'
import '../src/assets/fonts/fontawesome/fa-duotone-900.woff'
import '../src/assets/fonts/fontawesome/fa-duotone-900.woff2'
import '../src/assets/fonts/fontawesome/fa-light-300.ttf'
import '../src/assets/fonts/fontawesome/fa-light-300.eot'
import '../src/assets/fonts/fontawesome/fa-light-300.woff'
import '../src/assets/fonts/fontawesome/fa-light-300.woff2'
import '../src/assets/fonts/fontawesome/fa-regular-400.ttf'
import '../src/assets/fonts/fontawesome/fa-regular-400.eot'
import '../src/assets/fonts/fontawesome/fa-regular-400.woff'
import '../src/assets/fonts/fontawesome/fa-regular-400.woff2'
import '../src/assets/fonts/fontawesome/fa-solid-900.ttf'
import '../src/assets/fonts/fontawesome/fa-solid-900.eot'
import '../src/assets/fonts/fontawesome/fa-solid-900.woff'
import '../src/assets/fonts/fontawesome/fa-solid-900.woff2'
import '../src/assets/fonts/fontawesome/fa-thin-100.ttf'
import '../src/assets/fonts/fontawesome/fa-v4compatibility.ttf'
import '../src/assets/fonts/fontawesome/fa-v4compatibility.woff2'
import '../src/assets/fonts/fontawesome/fa-thin-100.woff2'

import '../src/assets/sass/style.scss'
// import '../src/assets/sass/utilities/_animation.scss'
// import '../src/assets/sass/utilities/_background.scss'
// import '../src/assets/sass/utilities/_btns.scss'
// import '../src/assets/sass/utilities/_common.scss'
// import '../src/assets/sass/utilities/_font.scss'
// import '../src/assets/sass/utilities/_overlay.scss'
// import '../src/assets/sass/utilities/_preloader.scss'
// import '../src/assets/sass/utilities/_text-color.scss'
// import '../src/assets/sass/utilities/_titles.scss'

// import '../src/assets/sass/template/headers/_header.scss'
import '../src/assets/sass/base/_variable.scss'
// import '../src/assets/sass/base/_function.scss'
// import '../src/assets/sass/base/_typography.scss'
// import '../src/assets/sass/base/_mixin.scss'
// import '../src/assets/sass/base/_wpdefault.scss'

// import '../src/assets/sass/reset/_container.scss'

// import '../src/assets/sass/reset/_grid.scss'

// import '../src/assets/sass/reset/_input.scss'

// import '../src/assets/sass/reset/_mobilemenu.scss'
// import '../src/assets/sass/reset/_slick-slider.scss'
// import "@fortawesome/fontawesome-free/css/all.min.css";

import '../src/assets/sass/spacing/_margin.scss'
import '../src/assets/sass/spacing/_padding.scss'
import Pugaipadangal from "./screens/nigazhchigal/Pugaipadangal.js";
import PugaipadangalDetails from "./screens/nigazhchigal/PugaipadangalDetails.js";
import Kaanoli from "./screens/nigazhchigal/Kaanoli"
import Nigazhvugal from "./screens/nigazhchigal/Nigazhvugal.js";
import Audios from "./screens/nigazhchigal/Audios.js";
// import Kaanoli from "./screens/nigazhchigal/Kaanoli.js";
// import '../src/assets/sass/spacing/_section-space.scss'
// import '../src/assets/sass/spacing/_spacing.scss'


// import '../src/assets/sass/template/breadcumb/_breadcumb-v1.scss'





function App() {
  
  return (
    <>
     
      <HashRouter>
        <Header />
        
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/ShopList" element={<ShopList/>} />
          <Route path="/ShopDetails" element={<ShopDetails/>} />
          <Route path="/ShopDetails/:id" element={<ShopDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        
          <Route path="/:engalaipatri" element={<Engalaipatri/>} />
          <Route path="/Collections/:Collections" element={<Thoguppugal/>} />
          <Route path="/Vahdhathulujjuth/:Vahdhathulujjuth" element={<Vahthathul1/>} />
          <Route path="/gyanagamiyangal/:gyanagamiyangal" element={<GyanaAgamiyangal/>} />
          <Route path="/Education/:Education" element={<Education/>} />
          <Route path="/manitha/:manitha" element={<Manitha/>} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/details/:contentId" element={<DetailPage />} />
          <Route path="/engalaipatricategory/:id" element={<Engalaipatricategory />} />
          <Route path="/எங்களைப்பற்றி/:id" element={<Engalaipatricategory />} />
          <Route path="/வஹ்தத்துல் வுஜூத்/:id" element={<Category />} />
          <Route path="/வஹ்தத்துல் வுஜூத்/::id/:subCategoryId" element={<VahtahthulSub />} />
          <Route path="/மனிதா/:id" element={<Category3 />} />
          <Route path="/ஞான அகமியங்கள்/:id" element={<Category2 />} />
          <Route path="/ஞான அகமியங்கள்/:id/:subCategoryId" element={<GyanaSub />} />
          <Route path="/மனிதா/:id/:subCategoryId" element={<ManithaSub />} />
          <Route path="/தொகுப்புகள்/:id" element={<Thoguppugalcategory />} />
          <Route path="/தொகுப்புகள்/:id/:subCategoryId" element={<ThoguppugalSubCategory />} />
          <Route path="/கல்வி/:id" element={<Kalvicategory />} />
          <Route path="/கல்வி/:id/:subCategoryId" element={<KalviSubCategory />} />
          <Route path="/எங்களைப்பற்றி/:id/:subCategoryId" element={<EngalaipatriSubcategory />} />
          <Route path="/manitha" element={<Manitha/>} />
        <Route path="/pechupottigal" element={<PechuPottigal/>} />
          <Route path="/kanoligal" element={<Kanoligal/>} />  
          <Route path="/Audios" element={<Audios/>} />                
           <Route path="/nigazhvugal" element={<Nigazhvugal/>} />
          <Route path="/pugaipadangal" element={<Pugaipadangal/>} />
          <Route path="/PugaipadangalDetails" element={<PugaipadangalDetails/>} />
          <Route path="/Kaanoli" element={<Kaanoli/>} />   
          {/* <Route path="/nigazhchigal/kaanoligal" element={<Kaanoli />} /> */}
          <Route path="/nigazhchigal/audios" element={<Audios/>} />


        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
