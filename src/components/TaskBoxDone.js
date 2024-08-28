import { format } from "date-fns";

import ButtonM from "./ButtonM";
 
import DeleteSVG from '../assets/images/DeleteSVG.svg'  
import { useTranslation } from "react-i18next";
 
 
 
function TaskBoxDone({id, title, description, completed, completed_at, createed_at, onClickTaskEditMode,  onClickTaskDelete,  onClickTaskDone, ...props } ) {
    const { t  } = useTranslation();   
 
    return (
   
        <div className='flex flex-col w-full h-auto lg:max-w-[60vw] border-green-400 border-2 my-2 rounded-md'>
            <div className='flex flex-col w-full h-full p-2  bg-green-400 justify-between items-center'>
                
            <div className='flex flex-row w-full justify-between   items-center'>
                
                <p className="text-xl">{t("list_task_box.task_id")} {id}</p>
                <div className="w-auto h-auto self-end flex flex-row  "> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z"/></svg>
                        <p className="text-lg font-bold  " >  {format(completed_at,"dd/MM/RRRR HH:MM:SS")}</p>
                    </div>  
                </div>
             
                <div className='flex flex-row w-full justify-between  items-center'>
                   
                <div className="w-full   h-full flex flex-row items-center justify-between   "> 
                        <div className=" w-1/12 h-full flex flex-row items-center  "> 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M420-160v-520H200v-120h560v120H540v520H420Z"/></svg>
                  
                        </div>  
                        <div className=" w-9/12 h-full flex flex-row items-center  "> 
                            <p className=" text-2xl ml-5 w-6/12  break-words" > {title}</p>
                        </div> 

                        <div className="w-2/12 h-full flex flex-row items-center     "> 
                            <div className=" flex flex-row items-center     "> 
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-480-80q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h40v-80h80v80h240v-80h80v80h40q33 0 56.5 23.5T760-720v244q-20-3-40-3t-40 3v-84H200v320h280q0 20 3 40t11 40H200Zm0-480h480v-80H200v80Zm0 0v-80 80Z"/></svg>

                            </div>  
                            <div className="flex flex-row items-center    "> 
                            <p className="text-sm flex flex-row" > {format(createed_at,"dd/MM/RRRR")}</p>
                            </div>  
    
                        </div>  
                    </div>  

                  
                      
                   
                  

 
                </div>
                
 
            </div>
            <div className="flex w-11/12    flex-row    text items-center p-2   "> 
                
                <div className="w-30 h-full  "> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                
                </div>  
                <div className="flex  w-full h-auto flex-row   items-center p-2  "> 
                    <p className=" text-lg ml-6 mt-3  w-10/12  break-words "> {description}</p>
                </div>   
            </div>
 
            <div className="flex flex-row items-center h-12 py-5 justify-around w-full   border-t-2 border-green-400 bg-green-200 "> 
            
              
                <ButtonM src={DeleteSVG}
                    altImg={t("list_task_box.task_box.delete_button.alt")}
                    onClick={onClickTaskDelete} 
                    className=" bg-red-500 rounded-full w-8 h-8  flex justify-center items-center hover:border-red-600 hover:bg-red-700 border-2 border-red-800 duration-500 "
             
                ></ButtonM>
            </div>
        </div>
    );
  }
  
  export default TaskBoxDone;