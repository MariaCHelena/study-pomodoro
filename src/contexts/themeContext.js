import { createContext, useEffect, useState } from "react";
import { claro, escuro } from "../style";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const themeContext = createContext({})

export function ThemeProvider({children}){
    const [temaAtual, setTemaAtual] = useState('escuro')

    const temas = {
        'escuro': escuro,
        'claro': claro
    }

    async function saveThemeAsync(tema){
        await AsyncStorage.setItem('@tema', tema)
        setTemaAtual(tema)
    }

    async function getTheme(){
        const temaSalvo = await AsyncStorage.getItem('@tema')
        if(temaSalvo){
            setTemaAtual(temaSalvo)
        }
    }

    useEffect(() => { getTheme() }, [])

    return <themeContext.Provider value={{
        temaAtual,
        setTemaAtual,
        temaEscolhido: temas[temaAtual],
        saveThemeAsync
    }}>
        {children}
    </themeContext.Provider>
}