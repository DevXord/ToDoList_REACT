 
 
import './App.css'; 
import AuthContextTaskProvider     from './store/task-content';
 
import { router } from './util/router';
 
 
import { 
  RouterProvider,
} from "react-router-dom"; 
 
  
 
function App() {
 
  
  return (
    <AuthContextTaskProvider> 
      <RouterProvider router={router} />  
    </AuthContextTaskProvider>
  );
}

export default App;