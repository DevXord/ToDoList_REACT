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
      <Route index path="/" element={<HomePage />} />
      <Route path="/Tasks" element={<TasksPage />} />
    </Route> 
  ),
  {
    basename: process.env.PUBLIC_URL,
  }
); 
export {router}