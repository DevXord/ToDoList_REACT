import {   createContext, useContext, useState } from "react";


const AuthContextTask = createContext({
    isRealodTask: true,
    language: true,
    tasks: [],
    setIsRealodTask: () => {},
    setLanguage: () => {},
    setTasks: () => {},
});

const AuthContextTaskProvider = ({ children }) =>{
    const [isRealodTask, setIsRealodTask] = useState(true);
    const [language, setLanguage] = useState(true);
    const [tasks, setTasks] = useState([]);

    const value = {
        isRealodTask: isRealodTask,
        language: language,
        tasks:tasks,
        setIsRealodTask:setIsRealodTask,
        setLanguage:setLanguage,
        setTasks: setTasks,
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
