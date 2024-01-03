import { createContext, useState } from "react";
import { claro, escuro } from "../style";

export const themeContext = createContext({})

export function ThemeProvider({children}){
    const [temaAtual, setTemaAtual] = useState('escuro')

    const temas = {
        'escuro': escuro,
        'claro': claro
    }

    return <themeContext.Provider value={{
        temaAtual,
        setTemaAtual,
        temaEscolhido: temas[temaAtual]
    }}>
        {children}
    </themeContext.Provider>
}