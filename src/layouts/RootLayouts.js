import React, { useEffect } from 'react'

import Header from "../components/Header"
import Footer from "../components/Footer"

import { Outlet }  from "react-router-dom";
import { useContextAuthTask } from '../store/task-content';
 


function RootLayouts() {
  const authCtx = useContextAuthTask();

 
  useEffect(() => {
    const load = () => {
 
      authCtx.loadLanguage();
    }
    load();
  } )
  

  return (

    <div className='flex bg-zinc-100 w-full max-w-{100vw} h-auto min-h-[100vh] flex-col items-center justify-between'> 
        <Header/>
        <main className='flex  rounded-md  bg-white w-full h-full lg:w-11/12  shadow-md my-5  lg:my-5  shadow-black flex-col items-center  justify-between'>
            <Outlet />
        </main>
       
        <Footer/>
      </div>

  
  )
}

export default RootLayouts;