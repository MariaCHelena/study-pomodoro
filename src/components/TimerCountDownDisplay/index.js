import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function TimerCountDownDisplay({timerDate, styles}) {
    return <View>
        <Text style={styles}>{timerDate.getMinutes().toString().padStart(2, "0")}:{timerDate.getSeconds().toString().padStart(2, "0")}</Text>
    </View>
}