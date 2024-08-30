 import { 
    NavLink, 
  } from "react-router-dom";

import ListTaskSVG from "../assets/images/ListTaskSVG.svg"
import LogoAppSVG from '../assets/images/LogoAppSVG.svg'
import { changeLanguage } from "i18next";
import { CircleFlag } from 'react-circle-flags'
import { useTranslation } from "react-i18next"; 
import { useContextAuthTask } from "../store/task-content";
 
 
function Header() {
  const { t  } = useTranslation();    
  const authCtx = useContextAuthTask();

  const  changeLang = (lng) =>{
      changeLanguage(lng) 
      localStorage.setItem('language',lng);
      authCtx.setLanguage(lng)
  }
    
 
  return (
    <header className=" shadow-md shadow-black bg-slate-400 h-12  xl:h-24 w-full flex flex-row justify-around items-center ">
        <div className='h-auto justify-center items-center w-10'>  
           <NavLink  className='link w-auto text-[0.55rem] font-bold  sm:text-xs lg:text-xl xl:text-2xl text-white flex flex-row  '  to="/tasks"> 
            <img src={ListTaskSVG} className='h-5 w-5 lg:h-12 lg:w-12   xl:w-16  xl:h-16 ' alt={t("header_and_footer.tasks_list_alt")}  ></img> 
            {t("header_and_footer.link_task_alt")} </NavLink> 
            </div>


       <NavLink  className='link w-auto text-xl  lg:text-3xl text-white flex flex-row justify-center items-center'  to="/"> 
            <div className='  flex flex-row justify-center items-center '> 
                <img src={LogoAppSVG} className='h-5 w-5 lg:h-12 lg:w-12  xl:w-16  xl:h-16 rounded-full border-4 ' alt={t("header_and_footer.logo_alt")} ></img>
                ToDo App
            </div>
            
            </NavLink>
    

       <div className='h-2/3 lg:h-5/6 w-auto text-xl  text-white flex flex-row justify-center items-center   '>
          <CircleFlag alt={t("header_and_footer.language_english_alt")}  className=" cursor-pointer border-2 border-white rounded-full  h-full " onClick={() =>  changeLang('en') } countryCode="gb" />
          <CircleFlag alt={t("header_and_footer.language_poland_alt")}  className=" cursor-pointer border-2 border-white rounded-full  h-full ml-2 lg:ml-5" onClick={() =>  changeLang('pl') } countryCode="pl" />
            
       </div>
    
    </header>
  );
}

export default Header;