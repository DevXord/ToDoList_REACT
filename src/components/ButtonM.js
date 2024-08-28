import Loading from "./Loading";

 

 
function ButtonM({text,altImg, imgClass,src='', isLoading, ...props }) {
  

  return (
    <button  draggable={false}  disabled={isLoading} {...props} >
      {isLoading ? 
       <Loading showSpin={true} spinClassName={'w-10 h-10 border-slate-400 border-4 border-t-0 rounded-full'}  ></Loading>
        :
      <><img draggable={false} src={src} alt={altImg} className={imgClass} ></img>
      {text}</>
    
       
      }
      </button>
  );
}

export default ButtonM;