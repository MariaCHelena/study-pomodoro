import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function TimerPauseButton({ pause, startTimer, stopTimer, styleButElement, styleBut, stylePauseBut}) {
    return <Animatable.View animation="pulse" iterationCount={pause ? "infinite" : 1} direction="alternate" style={styleButElement}>
        <TouchableOpacity
            onPress={() => pause ? startTimer() : stopTimer()}
            style={[styleBut, stylePauseBut]}
        >
            <Text>{pause ? "Start" : "Stop"}</Text>
        </TouchableOpacity>
    </Animatable.View>
}