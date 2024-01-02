import React from "react";
import { TouchableOpacity, Text } from "react-native";

import Telas from "../../components/Telas";

export default function Home({ navigation }) {

    return <Telas>
        <Text>Home</Text>
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Timer')
            }}
        >
            <Text>Ir para Timer</Text>
        </TouchableOpacity>
    </Telas>
}