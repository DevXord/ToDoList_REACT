import { useTranslation } from "react-i18next";

 
function Footer() {
  const { t  } = useTranslation();  
 
  return (
    <footer className=" shadow-inner shadow-black py-9 bg-slate-400 h-auto w-full flex flex-col justify-center items-center">
      <p className='w-auto lg:text-lg  xl:text-3xl  text-xs text-white font-bold flex flex-row text-center  '>{ t("header_and_footer.used_technologies_label")}</p>
      <div className='lg:w-4/5 w-11/12   h-auto text-white  flex flex-col lg:flex-row justify-around items-center  '> 
        <a target='_blank' rel="noreferrer" className='link text-white xl:text-xl lg:text-2xl text-[0.7rem] uppercase font-bold ' href='https://www.djangoproject.com'>Django, </a> 
        <a target='_blank' rel="noreferrer" className='link text-white xl:text-xl lg:text-2xl text-[0.7rem] uppercase font-bold ' href='https://react.dev/learn'>React, </a> 
        <a target='_blank' rel="noreferrer" className='link text-white xl:text-xl lg:text-2xl text-[0.7rem] uppercase font-bold ' href='https://tailwindcss.com'>Tailwind CSS, </a> 
        <a target='_blank' rel="noreferrer" className='link text-white xl:text-xl lg:text-2xl text-[0.7rem] uppercase font-bold ' href='https://www.django-rest-framework.org'>REST Framework,</a> 
        <a target='_blank' rel="noreferrer" className='link text-white xl:text-xl lg:text-2xl text-[0.7rem] uppercase font-bold ' href='https://axios-http.com'>Axios,</a> 
        <a target='_blank' rel="noreferrer" className='link text-white xl:text-xl lg:text-2xl text-[0.7rem] uppercase font-bold ' href='https://marcelodolza.github.io/iziToast/'>IziToast.</a> 
      </div> 
    </footer>
  );
}

export default Footer;