 
import 'react-datepicker/dist/react-datepicker.css';

import {   useState} from 'react';

import InputBox from './InputBox'
import ButtonM from './ButtonM'
import DatePicker from 'react-datepicker';
 
import { webApi } from "../services/webApi"
import { ToastError, ToastSuccess } from '../util/toast';

import AddCloudSVG from '../assets/images/AddCloudSVG.svg'
import AddTaskSVG from '../assets/images/AddTaskSVG.svg'
import TitleSVG from '../assets/images/TitleSVG.svg'   
import DescriptionSVG from '../assets/images/DescriptionSVG.svg'      
import { useContextAuthTask } from '../store/task-content';
import { useTranslation } from 'react-i18next';
 
 
 
function CreateTaskBox() {
 
  const [title , setTile  ] = useState('');
  const [description, setDescription   ] = useState(''); 
  const [completedAt , setCompletedAt  ] =useState(new Date());
  const [loading , setLoading ] = useState(false);
 
  const authCtx = useContextAuthTask();
  const { t  } = useTranslation(); 

  const ClearFields = () => {
    setTile('');
    setDescription(''); 
    setCompletedAt(new Date()); 
  
  }

  

  const isValidateFields =  () =>{
    var title_isValid = true, description_isValid = true, completedAt_isValid = true;
    var errorMessage = '';
    if(title){
      title_isValid = true;
    }
    else{
      title_isValid = false;
      errorMessage += t("create_box.toast.error.valid.title_message");
    }
    if(description){
      description_isValid = true;
    }
    else{
      description_isValid = false;
      errorMessage += t("create_box.toast.error.valid.description_message");
    }

    if(new Date(completedAt).getDate() !== new Date('1.1.1800').getDate()){
      completedAt_isValid = true;
    }
    else{
      completedAt_isValid = false;
      errorMessage +=  t("create_box.toast.error.valid.dateCompleted_message");
    }
    if(errorMessage)
      ToastError(t("create_box.toast.error.valid.label") + errorMessage.substring(0,errorMessage.length-1) + "!");
    

    return title_isValid && description_isValid && completedAt_isValid;
  }

  const AddTask = async () =>{
    

    if(isValidateFields()){
      setLoading(true);
      const data = {
        title: title,
        description: description,
        completed: false,
        completed_at: new Date(completedAt),


      }
   
      await webApi.post("add-task/",data).then((r) => {
        ToastSuccess(t("create_box.toast.success.add_task"), 5000);
        authCtx.setIsRealodTask(true);
        console.log(r);
      }).catch((err) => { 
        ToastError(t("create_box.toast.error.add_task"), 5000);
        console.error(err)
      });


      ClearFields();
      setLoading(false);
       
    }
  }

 

 
  return (
 
      <div className='relative p-5  lg:mr-5 h-auto w-[100vw] lg:w-1/3 min-w-72 flex flex-col items-center justify-around  shadow-md shadow-black rounded-2xl bg-slate-50  border-black  '>
 
        <img  className='lg:h-10 h-10 lg:-top-5 lg:-left-5 -top-5 text-black absolute rounded-full' src={AddCloudSVG} alt={t("create_box.add_box_icon_alt")}></img>
        <div className='h-auto w-auto flex flex-col items-center justify-around'> 
          <InputBox value={title}
           onChange={(e) => setTile(e.target.value)} 
           lengthMax={100} 
           className=" py-3 w-[80vw] lg:w-64 flex text-center border-2 rounded-sm border-gray-300  hover:border-gray-800 duration-200 ease-in-out"  
           imageAlt={t("create_box.title.alt")} 
           src={TitleSVG} 
           showLengthCount={true} 
           showIcon={true}
           type="text"  
           placeholder={t("create_box.title.place_holder")}  /> 

          <InputBox value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          lengthMax={500} 
          className=" py-5 resize-none w-[80vw] lg:w-64 h-36 lg:h-52 flex text-center border-2 rounded-sm border-gray-300 scrollsettings  hover:border-gray-800 duration-200 ease-in-out whitespace-normal   " 
          isTextArea={true}
          showLengthCount={true} 
          showIcon={true}
          imageAlt={t("create_box.description.alt")}
          src={DescriptionSVG}   
          type="text" 
          placeholder={t("create_box.description.place_holder")} /> 

         {!authCtx.isRealodLanguage && <DatePicker selected={completedAt} 
          minDate={new Date()}   
          onChange={(date) => setCompletedAt(date)}  
          showIcon
          showTimeInput
          dateFormat="Pp"   
          className="mb-5 py-5 w-[80vw]  lg:w-64 flex text-center border-2 rounded-sm border-gray-300  hover:border-gray-800 duration-200 ease-in-out"
          calendarClassName="bg-white border  border-gray-300 rounded-lg shadow-lg "
          calendarIconClassName='h-10 w-10 -top-4 -left-4 text-black absolute bg-white rounded-lg'
          locale={authCtx.language === "en" ? "en" : "pl"}
          /> }
        </div>
           <ButtonM onClick={AddTask} 
           isLoading={loading}  
           imgClass="h-5/6 mr-2" 
           className='btn w-2/3 h-12 lg:w-2/3 text-2xl bg-teal-400 text-white uppercase font-bold flex flex-row justify-center  items-center disabled:bg-teal-900 disabled:cursor-default'  
           text={t("create_box.add_button.text")}
           altImg={t("create_box.add_button.alt")}
           src={AddTaskSVG} ></ButtonM>
      
    
      </div>
   
  );
}

export default CreateTaskBox;