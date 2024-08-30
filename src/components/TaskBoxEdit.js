import { format } from "date-fns";

import ButtonM from "./ButtonM";

import SaveSVG from '../assets/images/SaveSVG.svg'    
import CancelSVG from '../assets/images/CancelSVG.svg'  
import { useState } from "react";
import InputBox from "./InputBox";
import DatePicker from "react-datepicker";
import {  ToastError,  ToastWarning } from "../util/toast";
import { useTranslation } from "react-i18next";
import { useContextAuthTask } from "../store/task-content";
 
function TaskBoxEdit({id, title, description, completed, completed_at, createed_at, onClickTaskEditSave, onClickTaskEditCancel, ...props } ) {
  
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const [newCompletedAt, setNewCompletedAt] = useState(completed_at)
    
    const authCtx = useContextAuthTask();
    const { t  } = useTranslation();  

    const isValidateFields =  () => {
        var title_isValid = true, description_isValid = true, completedAt_isValid = true,  profanity_isValid = true; 
 
        var profanity = [...t("censorship_of_profanity_en").split(', '), ...t("censorship_of_profanity_pl").split(', ')]
    
        if(newTitle !== title)
          title_isValid = true;
        else
          title_isValid = false;

          if(newTitle.length > 5)
            title_isValid = true;
          else{
            title_isValid = false;
            ToastWarning(t("toast.warning.title_too_short"));
          }


        if(newDescription !== description)
          description_isValid = true;
        else
          description_isValid = false;

        if(newDescription.length > 5)
            title_isValid = true;
          else{
            title_isValid = false;
            ToastWarning(t("toast.warning.description_too_short"));
          }
    
        if(newCompletedAt !== completed_at)
          completedAt_isValid = true;
        else
          completedAt_isValid = false;
      
        if(new Date(newCompletedAt) >= Date.now())
            completedAt_isValid = true;
        else{
            completedAt_isValid = false;
            ToastError(t("toast.error.task_completed_from_future"));
        }
          
        profanity_isValid = !profanity.some(str =>  newTitle.toLocaleLowerCase().includes(str.toLocaleLowerCase()) || newDescription.toLocaleLowerCase().includes(str.toLocaleLowerCase())); 
    
        if(!profanity_isValid){
            ToastError(t("toast.error.profanity"));
 
        }

        return profanity_isValid && (title_isValid || description_isValid || completedAt_isValid);
      }

     const SaveTask = () =>{
        const newTask = {
            title: newTitle, 
            description: newDescription  , 
            completed: completed    , 
            completed_at: newCompletedAt , 
            createed_at: createed_at ,
        }
         
        if(isValidateFields())
            onClickTaskEditSave(newTask)
        else
            ToastWarning(t("toast.warning.one_task_must_change"))
       
             
        
     }
    

           

    return (
   
        <div className='flex flex-col w-full h-auto  border-orange-400 border-2 my-2 rounded-md'>
            <div className='flex flex-col w-full h-full p-2  bg-orange-400   justify-between items-center'>
                
                <div className='flex flex-row w-full justify-between items-center'>
                
                <p className="text-xl">{t("list_task_box.task_id")} {id}</p>
                <div className=" text-lg font-bold mr-12 flex flex-row ">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z"/></svg>
                <DatePicker selected={newCompletedAt} 
                            minDate={new Date()}   
                            onChange={(date) => setNewCompletedAt(date)} 
                         
                            showTimeInput
                            dateFormat="Pp" // Formatowanie daty i godziny
                            locale={authCtx.language === "en" ? "en" : "pl"}
                            className="  w-64 flex text-center border-2 rounded-sm border-gray-300  hover:border-gray-800 duration-200 ease-in-out"
                            calendarClassName="bg-white border  border-gray-300 rounded-lg shadow-lg "
                            calendarIconClassName='h-10 w-10 -top-4 -left-4 text-black absolute bg-white rounded-lg' />
                    
                    
                    </div>
                </div>
             
                <div className='flex flex-row w-full justify-between  items-center'>
  
                    <div className="w-full h-full flex flex-row items-center justify-center "> 
                        <div className=" w-30 h-full flex flex-row items-center justify-center "> 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M420-160v-520H200v-120h560v120H540v520H420Z"/></svg>
                  
                        </div>  
                        <div className=" w-full h-full flex flex-row items-center "> 
                            <InputBox value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)} 
                                lengthMax={100} 
                                className=" w-full h-full py-2 flex text-center border-2 rounded-sm border-gray-300  hover:border-gray-800 duration-200 ease-in-out"  
                            
                                showLengthCount={true} 
                                type="text"  
                                placeholder={t("create_box.title.place_holder")}/> 
                        </div> 
                         
                    </div>   
 



                    <div className="w-30 h-full flex flex-row items-center  "> 
                        <div className=" flex flex-row items-center p-2   "> 
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-480-80q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h40v-80h80v80h240v-80h80v80h40q33 0 56.5 23.5T760-720v244q-20-3-40-3t-40 3v-84H200v320h280q0 20 3 40t11 40H200Zm0-480h480v-80H200v80Zm0 0v-80 80Z"/></svg>

                        </div>  
                        <div className="flex flex-row items-center p-2  "> 
                        <p className="text-sm  self-end flex flex-row" > {format(createed_at,"dd/MM/RRRR")}</p>
                        </div>  
 
                    </div>    
                </div>  
            </div>

            <div className="flex flex-row items-center p-2 "> 
                
                <div className="w-30 h-full  "> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                
                </div>  
                <div className="flex flex-row items-center  w-full h-full  "> 
                    <InputBox value={newDescription} 
                        onChange={(e) => setNewDescription(e.target.value)} 
                        lengthMax={500} 
                        className="  resize-none w-full h-full  py-5 flex text-center border-2 rounded-sm border-gray-300 scrollsettings  hover:border-gray-800 duration-200 ease-in-out whitespace-normal   " 
                        isTextArea={true}
                        showLengthCount={true} 
                        type="text" 
                        placeholder={t("create_box.description.place_holder")} /> 
                </div>   
            </div>
        
 


          
            <div className="flex flex-row items-center py-5 justify-around w-full h-12 border-t-2  border-orange-400 bg-orange-200 "> 
 
                <ButtonM src={SaveSVG}
                    altImg={t("list_task_box.task_box.save_button")} cancel_button
                    onClick={() => SaveTask()}  
                    className=" bg-green-500 hover:border-green-600 hover:bg-green-700 border-2 border-green-800 rounded-full w-8 h-8  flex justify-center items-center duration-500 "
                >

                </ButtonM>
              
                <ButtonM src={CancelSVG}
                    altImg={t("list_task_box.task_box.cancel_button")}  
                    onClick={onClickTaskEditCancel} 
                    className=" bg-red-500 hover:border-red-600 hover:bg-red-700 border-2 border-red-800 w-8 h-8 rounded-full  flex justify-center items-center duration-500 "
                

                
                ></ButtonM>
            </div>
        </div>
    );
  }
  
  export default TaskBoxEdit;