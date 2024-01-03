import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useContext } from "react";

import { themeContext } from "../../contexts/themeContext";

import Telas from "../../components/Telas";
import styles from "./style";
import { timerContext } from "../../contexts/timerContext";

export default function Home({ navigation }) {
    const {temaEscolhido } = useContext(themeContext)
    const style = styles(temaEscolhido)
    const {focus} = useContext(timerContext)

    return <Telas styles={style.main}>
        <Text style={style.welcome}>Welcome to Study Pomodoro!</Text>
        <Text style={style.motivation}>Study consistently to accomplish your goals.</Text>
        <View style={style.buttonsWrapper}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Timer')
                }}
                style={style.buttons}
            >
                <Text style={style.textButton}>Start to Study</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Settings')
                }}
                style={style.buttons}
            >
                <Text style={style.textButton}>Settings</Text>
            </TouchableOpacity>
        </View>
    </Telas>
}