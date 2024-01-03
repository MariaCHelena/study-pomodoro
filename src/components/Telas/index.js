import React, { useContext } from "react";
import { StatusBar, SafeAreaView } from "react-native";

import styled from "./style";
import { themeContext } from "../../contexts/themeContext";

export default function Telas({ children, styles }){
    const {temaEscolhido } = useContext(themeContext)
    const style = styled(temaEscolhido)

    return <SafeAreaView style={[style.tela, styles]}>
        { children }
        <StatusBar />
    </SafeAreaView>
}