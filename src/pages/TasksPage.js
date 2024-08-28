 
import CreateTaskBox from '../components/CreateTaskBox';
import ListTasksBox from '../components/ListTasksBox';

function TasksPage() {
 

 

  return (
    <div className='h-full lg:max-h-[80vh] my-2 lg:my-auto md:p-10 w-full flex flex-col lg:flex-row lg:justify-around justify-between items-center lg:bg-slate-100 rounded-md '>
 
      <CreateTaskBox />
   
      <ListTasksBox />


    </div>
  
    
  );
}

export default TasksPage;