import { useEffect, useState } from "react";
import { webApi } from "../services/webApi";
import { ToastError, ToastSuccess, ToastWarning } from "../util/toast";

import TaskBox from "./TaskBox";
import TaskBoxEdit from "./TaskBoxEdit";
import TaskBoxDone from "./TaskBoxDone";
import Loading from "./Loading";
import { useContextAuthTask } from "../store/task-content";
import { useTranslation } from "react-i18next";
 
 
function ListTasksBox() {
  
  const [loading, setLoading] = useState(false)
 
  const [isTasksInEditMode, setIsTasksInEditMode] = useState(true)
  const { t  } = useTranslation(); 

  const authCtx = useContextAuthTask();

 

  const TaskEditMode = (index) => {
    if(isTasksInEditMode) return ToastWarning(t("list_task_box.toast.error.edit_mode_is_on"))

    const task = authCtx.tasks[index];
    task.isEditMode = true;
    setIsTasksInEditMode(true);
    
  }

  const TaskEditClose = (index) => {
   
    const task = authCtx.tasks[index];
    task.isEditMode = false;
    setIsTasksInEditMode(false);
  }


  const TaskEditSave = async (newTask, index) => {
   
    const task = authCtx.tasks[index];
  
    const data = {
      title: newTask.title,
      description: newTask.description,
      completed: task.completed, 
      createed_at: task.createed_at,
      completed_at: newTask.completed_at,


    }
    setLoading(true);
    await webApi.put(`tasks/${task.id}/update-task/`,data).then((r) => {
      ToastSuccess( t("list_task_box.toast.success.task_update"), 5000);
    


    }).catch((err) => { 
      ToastError(t("list_task_box.toast.error.task_update"), 5000);
       
      console.error(err)
    });
    setLoading(false); 
    authCtx.setIsRealodTask(true);

  }


 




  const TaskDelete = async (index) => {
    const task = authCtx.tasks[index];
  
    setLoading(true);
    await webApi.delete(`tasks/${task.id}/delete-task/`).then((r) => {
        ToastSuccess( t("list_task_box.toast.success.task_delete"), 5000);
        
      }).catch((err) => { 
        ToastError(t("list_task_box.toast.error.task_delete"), 5000);
        console.error(err)
      });
      setLoading(false);
      authCtx.setIsRealodTask(true);
  }
  const TaskDone = async (index) => {
    const task = authCtx.tasks[index];
  
    const data =  { 
      title:task.title,
      description: task.description,
      completed: true,
      created_at: task.createed_at,
      completed_at:task.completed_at,
    }
      
    
   

    setLoading(true);
    await webApi.put(`tasks/${task.id}/update-task/`, data
    ).then((r) => {
      ToastSuccess(t("list_task_box.toast.success.task_completed"), 5000);
      
    }).catch((err) => { 
      ToastError(t("list_task_box.toast.error.task_completed"), 5000);
      console.error(err)
    });
    setLoading(false);
    authCtx.setIsRealodTask(true);
  }

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      await webApi.get("tasks/").then((r) => {
        const oldTasks = r.data; 
        const newTasks = [] 
        if(oldTasks)
        {
          for (let i = 0; i < oldTasks.length; i++) {
            const oldTask = oldTasks[i];
            const newTask = {
              id: oldTask.id,
              title: oldTask.title,
              description: oldTask.description,
              completed: oldTask.completed,
              createed_at: oldTask.createed_at,
              completed_at: oldTask.completed_at,
              isEditMode:false,
            }
            newTasks.push(newTask);
            
          }
        }

          

        authCtx.setTasks(newTasks);

      }).catch((err) => { 
        ToastError(t("list_task_box.toast.error.download_task"), 5000);
       
        console.error(err)
      });
      setLoading(false);
      authCtx.setIsRealodTask(false);
      setIsTasksInEditMode(false);
    }

    if(authCtx.isRealodTask)
      fetchTasks();

  }, [authCtx.isRealodTask, isTasksInEditMode ])

 
  
  return (
 
    <div className=' my-10 lg:my-auto h-full lg:max-h-[70vh] min-h-52 w-[100vw] lg:w-full flex flex-col items-center justify-center  shadow-md shadow-black rounded-2xl bg-slate-50  border-black'>
        {loading ? 
       <Loading showSpin={true}  text={ t("list_task_box.loading")  } spinClassName={'w-96 h-96 border-slate-400 border-4 border-t-0 rounded-full'}  ></Loading>
      :
       
       <div className=' h-full w-full flex flex-col min-h-64 items-center justify-center  '>
      
      {authCtx.tasks.length > 0 ? <div className=' h-1/6  py-2 px-3 w-full flex flex-col overflow-y-auto scrollsettings '>
            {authCtx.tasks.map((task, index) =>{
           
              if(task.completed)
                return (<TaskBoxDone key={task.id} {...task}   onClickTaskDelete ={() => TaskDelete(index)}   ></TaskBoxDone>)
              if(task.isEditMode) 
                return (<TaskBoxEdit key={task.id} {...task}  onClickTaskEditSave={(newTask) => TaskEditSave(newTask, index)}  onClickTaskEditCancel ={() => TaskEditClose(index)}  ></TaskBoxEdit>)
              else
                return (<TaskBox key={task.id} {...task}  onClickTaskEditMode={() => TaskEditMode(index)}  onClickTaskDelete ={() => TaskDelete(index)}  onClickTaskDone={() => TaskDone(index)} ></TaskBox>)


            })}
            </div> :  <Loading showSpin={false}  text={ t("list_task_box.list_is_empty")  }    ></Loading>}
        </div> }
    </div> 
    
  );
}

export default ListTasksBox;