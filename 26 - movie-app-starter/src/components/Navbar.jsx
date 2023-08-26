import React, { useState } from "react";
import {RxAvatar } from 'react-icons/rx';
import {MdLightMode} from 'react-icons/md';
import {MdDarkMode} from 'react-icons/md';


const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleTheme= ()=> {
    document.documentElement.classList.toggle("dark");
    setToggleIcon(!toggleIcon)
  }
  return <div  className="bg-orange-200 py-3 flex justify-between items-center px-5 dark:bg-red-700 ">

  <h1>Euro Tech Movie App</h1>
  <div className="flex gap-3 ">
  <RxAvatar className="border-black text-xl "/>
  {toggleIcon ? <MdLightMode  onClick={handleTheme}  className="border-black text-xl "/> : <MdDarkMode onClick={handleTheme} /> }
    



</div>
  </div>
 
  



  

};

export default Navbar;
