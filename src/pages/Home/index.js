import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Home({ navigation }) {

    return <>
        <Text>Home</Text>
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Timer")
            }}
        >
            <Text>
                Ir para Timer
            </Text>
        </TouchableOpacity>
    </>
}