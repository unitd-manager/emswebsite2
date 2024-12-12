import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../src/screens/Home";
import Engalaipatri from "../src/screens/engalaipatri.js";
import Education from "./Education/Education.js";
import DetailPage from "../src/screens/DetailPage";
import DetailPage2 from "../src/screens/DetailPage2.js";
import DetailPage4 from "../src/screens/DetailPage4.js";
import ThoguppugalDetailPage from "../src/screens/thoguppugaldetail";
import Engalaipatrimaincategory from "../src/screens/engalaipatrimaincategory";

import Engalaipatricategory from "../src/screens/engalaipatricategory";
import Engalaipatricategory1 from "../src/screens/engalaipatricategory1";
import Engalaipatricategory2 from "../src/screens/engalaipatricategory2";
import Engalaipatricategory3 from "../src/screens/engalaipatricategory3";
import Engalaipatricategory4 from "../src/screens/engalaipatricategory4";

import EngalaipatriSubcategory from "../src/screens/EngalaipatriSubcategory";
import EngalaipatriSubcategory1 from "../src/screens/EngalaipatriSubcategory1";
import EngalaipatriSubcategory2 from "../src/screens/EngalaipatriSubcategory2";

import EngalaipatriSubcategory3 from "../src/screens/EngalaipatriSubcategory3";
import EngalaipatriSubcategory4 from "../src/screens/EngalaipatriSubcategory4";
import EngalaipatriSubcategory5 from "../src/screens/EngalaipatriSubcategory5";
import DetailBlog from "../src/screens/DetailBlog";

import Vahthathul1 from "./Vahthathulvujooth/Vahdhathulujjuth.js";
import GyanaAgamiyangal from "./Gyanagamiyangal/gyanagamiyangal.js";
import Manitha from "./Manitha/manitha.js";
import Category from "./Vahthathulvujooth/categoryDetails.js";
import Category2 from "./Gyanagamiyangal/categoryDetails2.js";


import MahangalDetails from "./Manitha/MahangalDetails.js";
import Amudhamozhi from "./Manitha/Amudhamozhi.js";
import IyyamThalivum from "./Manitha/IyyamThalivum.js";
import EraiNasagerkal from "./Manitha/EraiNasagerkal.js";
import HalalHaram from "./Manitha/HalalHaram.js";
import UnmaiVilakkam from "./Manitha/UnmaiVilakkam.js";

import VahtahthulSub from "./Vahthathulvujooth/VahthathulvujoothSub.js";
import ManithaSub from "./Manitha/ManithaSub.js";
import GyanaSub from "./Gyanagamiyangal/gyanaSub.js";
import Kalvicategory from "./Education/EducationCategory.js";
import Kalvicategories from "./Education/EducationCategories.js";
import Thoguppugalmaincategory from "../src/screens/thoguppugalmaincategory";

import KalviSubCategory from "./Education/EducationSub.js";
import PechuPottigal from "./Vahthathulvujooth/pechupottigalsub.js";
import Kanoligal from "./Vahthathulvujooth/kanoligalsub.js";
import ShopDetails from "./BookShop/ShopDetails.js"
import Cart from "./BookShop/Cart.js";
import CheckOut from "./BookShop/CheckOut.js";
import Login from "./auth/Login.js";
import Register from "./auth/Register";
import Thoguppugalcategory from "../src/screens/thoguppugalcategory";
import Thoguppugalcategory1 from "../src/screens/thoguppugalcategory1";
import Thoguppugalcategory2 from "../src/screens/thoguppugalcategory2";
import Thoguppugalcategory3 from "../src/screens/thoguppugalcategory3";
import Thoguppugalcategory4 from "../src/screens/thoguppugalcategory4";
import Thoguppugalcategory5 from "../src/screens/thoguppugalcategory5";
import Thoguppugal from "../src/screens/thoguppugal";
import ThoguppugalSubCategory from "../src/screens/ThoguppugalSubcategory";
import ThoguppugalSubCategory1 from "../src/screens/ThoguppugalSubcategory1";
import ThoguppugalSubCategory2 from "../src/screens/ThoguppugalSubcategory2";

import ShopList from "./BookShop/ShopList";
import BooksMenu from "./Menu/BooksMenu";
import FromBookList from "./BookShop/FromBookList";
import PublicationReview from "./BookShop/PublicationReview"
import Contact from "./screens/contact.js";
import Footer from "./header/Footer";
import Header from "./header/Header";

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
import Nigazhchigal from "./screens/nigazhchigal/nigazhchigal.js";





function App() {
  
  return (
    <>
     
      <HashRouter>
        <Header />
        
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/ShopList/ShopList" element={<ShopList/>} />
          <Route path="/ShopDetails" element={<ShopDetails/>} />
          <Route path="/ShopDetails/:id" element={<ShopDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

            {/* thoguppugalmenu*/}
          <Route path="/Collections/:Collections" element={<Thoguppugal/>} />
          <Route path="/tm/:id" element={<Thoguppugalcategory />} />
          <Route path="/award/:id" element={<Thoguppugalcategory1 />} />
          <Route path="/essay/:id" element={<Thoguppugalcategory2 />} />
          <Route path="/poem/:id" element={<Thoguppugalcategory3 />} />
          <Route path="/moulid/:id" element={<Thoguppugalcategory4 />} />
          <Route path="/song/:id" element={<Thoguppugalcategory5 />} />
          <Route path="/tamil/:subCategoryId" element={<ThoguppugalSubCategory />} />
          <Route path="/history/:subCategoryId" element={<ThoguppugalSubCategory1 />} />
          <Route path="/poeter/:subCategoryId" element={<ThoguppugalSubCategory2 />} />
       {/* thoguppugalmenu*/}
        <Route path="/DetailBlog/:id" element={<DetailBlog />} />

        


          {/* engalaipatrimenu*/}
          <Route path="/:engalaipatri" element={<Engalaipatri/>} />
          <Route path="/*/:niruv" element={<Engalaipatricategory/>} />
          <Route path="/@/:niruv" element={<Engalaipatricategory1/>} />
          <Route path="/+/:niruv" element={<Engalaipatricategory2/>} />
          <Route path="/=/:niruv" element={<Engalaipatricategory3/>} />
          <Route path="/!/:niruv" element={<Engalaipatricategory4/>} />
          <Route path="/va/:subCategoryId" element={<EngalaipatriSubcategory />} />
          <Route path="/tha/:subCategoryId" element={<EngalaipatriSubcategory1 />} />
          <Route path="/an/:subCategoryId" element={<EngalaipatriSubcategory2 />} />
          <Route path="/ka/:subCategoryId" element={<EngalaipatriSubcategory3 />} />
          <Route path="/ar/:subCategoryId" element={<EngalaipatriSubcategory4 />} />
          <Route path="/ta/:subCategoryId" element={<EngalaipatriSubcategory5 />} />
         {/* engalaipatrimenu*/}

          <Route path="/nigazhchigal/:nigazhchigal" element={<Nigazhchigal/>} />
          <Route path="/Vahdhathulujjuth/:Vahdhathulujjuth" element={<Vahthathul1/>} />
          <Route path="/gyanagamiyangal/:gyanagamiyangal" element={<GyanaAgamiyangal/>} />
          <Route path="/Education/:Education" element={<Education/>} />
          <Route path="/manitha/:manitha" element={<Manitha/>} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/details/:contentId" element={<DetailPage />} />
          <Route path="/details2/:contentId2" element={<DetailPage2 />} />
          <Route path="/details4/:contentId4" element={<DetailPage4 />} />
          <Route path="/thoguppugaldetails/:contentId" element={<ThoguppugalDetailPage />} />
          <Route path="/engalaipatrimaincategory/:categoryId" element={<Engalaipatrimaincategory />} />

          <Route path="/engalaipatricategory/:id" element={<Engalaipatricategory />} />
          <Route path="/எங்களைப்பற்றி/:id" element={<Engalaipatricategory />} />
          <Route path="/Vahthathul/:Parizu" element={<Category />} />
          <Route path="/வஹ்தத்துல் வுஜூத்/::id/:subCategoryId" element={<VahtahthulSub />} />

            {/* manitha */}


          <Route path="/MahangalDetails/:MahangalDetails" element={<MahangalDetails />} />
          <Route path="/Amudhamozhi/:Amudhamozhi" element={<Amudhamozhi />} />
          <Route path="/IyyamThalivum/:IyyamThalivum" element={<IyyamThalivum />} />
          <Route path="/EraiNasagerkal/:EraiNasagerkal" element={<EraiNasagerkal />} />
          <Route path="/HalalHaram/:HalalHaram" element={<HalalHaram />} />
          <Route path="/UnmaiVilakkam/:UnmaiVilakkam" element={<UnmaiVilakkam />} />

          <Route path="/ஞான அகமியங்கள்/:id" element={<Category2 />} />
          <Route path="/ஞான அகமியங்கள்/:id/:subCategoryId" element={<GyanaSub />} />
          <Route path="/மனிதா/:id/:subCategoryId" element={<ManithaSub />} />
          <Route path="/தொகுப்புகள்/:id" element={<Thoguppugalmaincategory />} />
          <Route path="/தொகுப்புகள்/:id/:subCategoryId" element={<ThoguppugalSubCategory />} />

          <Route path="/&/:jamia" element={<Kalvicategory />} />

          <Route path="/கல்வி/:id" element={<Kalvicategories />} />

          <Route path="/கல்வி/:id/:subCategoryId" element={<KalviSubCategory />} />
          <Route path="/எங்களைப்பற்றி/:id/:subCategoryId" element={<EngalaipatriSubcategory />} />
          {/* <Route path="/manitha" element={<Manitha/>} /> */}
        <Route path="/pechupottigal" element={<PechuPottigal/>} />
          <Route path="nigazhchigal/காணொளிகள்" element={<Kanoligal/>} />  
          <Route path="நிகழ்ச்சிகள்/ஆடியோ" element={<Audios/>} />                
           <Route path="நிகழ்ச்சிகள்/நிகழ்வுகள்" element={<Nigazhvugal/>} />
          <Route path="நிகழ்ச்சிகள்/புகைப்படங்கள்" element={<Pugaipadangal/>} />
          <Route path="/PugaipadangalDetails" element={<PugaipadangalDetails/>} />
          <Route path="நிகழ்ச்சிகள்/காணொளிகள்" element={<Kaanoli/>} />
          <Route path="/noorkal/:noorkal" element={<BooksMenu/>} />    
          <Route path="/PublicationReview/PublicationReview" element={<PublicationReview />} />
          <Route path="/FromBookList/FromBookList" element={<FromBookList/>} />


        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
