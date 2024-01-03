import { createContext, useState } from "react";

export const timerContext = createContext({})

export function TimerProvider({children}){
    const [focus, setFocus] = useState(25);
    const [shortBreak, setShortBreak] = useState(5);
    const [longBreak, setLongBreak] = useState(15);

    return <timerContext.Provider value={{focus, setFocus, shortBreak, setShortBreak, longBreak, setLongBreak}}>
        {children}
    </timerContext.Provider>
}