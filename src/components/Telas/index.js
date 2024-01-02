import React from "react";
import { StatusBar, SafeAreaView } from "react-native";

import style from "./style";

export default function Telas({ children, styles }){
    return <SafeAreaView style={[style.tela, styles]}>
        { children }
        <StatusBar />
    </SafeAreaView>
}