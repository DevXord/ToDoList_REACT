import { changeLanguage } from "i18next";
import { createContext, useContext, useState } from "react";


const AuthContextTask = createContext({
    isRealodTask: true,
    language: 'en',
    tasks: [],
    setIsRealodTask: () => {},
    setLanguage: () => {},
    setTasks: () => {},
    loadLanguage: () => {},
});

const AuthContextTaskProvider = ({ children }) =>{
    const [isRealodTask, setIsRealodTask] = useState(true);
    const [language, setLanguage] = useState('en');
    const [tasks, setTasks] = useState([]);



    const  loadLanguage = () =>{

        const lng = localStorage.getItem('language'); 
        changeLanguage(lng ? lng : "en")  
        setLanguage(lng ? lng : "en")  
    }





    const value = {
        isRealodTask: isRealodTask,
        language: language,
        tasks:tasks,
        setIsRealodTask:setIsRealodTask,
        setLanguage:setLanguage,
        setTasks: setTasks,
        loadLanguage:loadLanguage,
    }

    return (
        <AuthContextTask.Provider value={value} >
            {children}
        </AuthContextTask.Provider>

    )
}

export default AuthContextTaskProvider;

export const useContextAuthTask = () =>{

    const authCtx = useContext(AuthContextTask);
    return authCtx;
}
