import { useTranslation } from "react-i18next";

 
function HomePage() {
  const { t  } = useTranslation();  

  return (
    <div className='h-full w-full p-6 flex justify-center items-center bg-slate-100 rounded-md  '>
      <p className=" text-xl  lg:text-2xl   xl:text-3xl font-bold font-sans text-center  ">{t("about_aplication")}</p>
    </div>
  
  );
}

export default HomePage;