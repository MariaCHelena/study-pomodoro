import React from "react";
import { Text } from "react-native";
import style from "./style";

import Telas from "../../components/Telas";

export default function Home({ navigation }) {

    return <Telas>
        <Text style={style.texto}>Timer</Text>
    </Telas>
}