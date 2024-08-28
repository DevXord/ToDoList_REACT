import {
    createBrowserRouter,
    createRoutesFromElements,
    Route, 
    
  } from "react-router-dom";

import HomePage from "../pages/HomePage";
import TasksPage from "../pages/TasksPage";
import RootLayouts from "../layouts/RootLayouts";
  
const router = createBrowserRouter(
  createRoutesFromElements(<Route element={<RootLayouts />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/Tasks" element={<TasksPage />} />
    </Route> 
  )
); 
export {router}