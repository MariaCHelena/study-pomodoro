import React, { useState } from "react";
import { Pressable, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';

import styles from "./style";
import { cores } from "../../style";

import Telas from "../../components/Telas";
import Icon from 'react-native-vector-icons/Feather';

export default function Home({ navigation }) {
    const [showClock, setShowClock] = useState(false)
    const [pause, setPause] = useState(false)
    const style = styles(showClock)

    function cancelTimer() {
        setPause(false)
        setShowClock(false)
    }

    return <Telas style={style.main}>
        <View style={style.header}>
            <Text style={style.text}>{showClock ? "Focus!" : "Timer"}</Text>
        </View>
        <View style={style.clockArea}>
            {showClock ? <View>
                <Text style={[style.time, style.timerElement]}>00:00</Text>

                <View style={style.buttonsWrapper}>
                    {pause ?
                        <Animatable.View animation="pulse" iterationCount="infinite" direction="alternate" style={style.buttonElement}>
                            <TouchableOpacity
                                onPress={() => setPause(false)}
                                style={[style.button, style.pauseButton]}
                            >
                                <Text>Start</Text>
                            </TouchableOpacity>
                        </Animatable.View> :
                        <TouchableOpacity
                            onPress={() => setPause(true)}
                            style={[style.button, style.buttonElement]}
                        >
                            <Text>Pause</Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity
                        onPress={() => cancelTimer()}
                        style={[style.button, style.cancelButton, style.buttonElement]}
                    >
                        <Text>Cancel Timer</Text>
                    </TouchableOpacity>
                </View>
            </View> : <Pressable
                onPress={() => setShowClock(true)}
            >
                <Icon
                    style={style.timerElement}
                    name="play-circle"
                    size={120}
                    color={cores.white}
                />
            </Pressable>}
        </View>
    </Telas>
}