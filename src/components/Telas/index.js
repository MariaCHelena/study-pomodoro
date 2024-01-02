import React from "react";
import { StatusBar, SafeAreaView } from "react-native";

import style from "./style";

export default function Telas({ children }){
    return <SafeAreaView style={style.tela}>
        { children }
        <StatusBar />
    </SafeAreaView>
}