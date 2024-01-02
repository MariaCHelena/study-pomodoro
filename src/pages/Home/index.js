import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import Telas from "../../components/Telas";
import style from "./style";

export default function Home({ navigation }) {

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
                    navigation.navigate('Configurations')
                }}
                style={style.buttons}
            >
                <Text style={style.textButton}>Configurations</Text>
            </TouchableOpacity>
        </View>
    </Telas>
}