import React, { useEffect, useState } from "react";
import { Pressable, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';

import styles from "./style";
import { cores } from "../../style";

import Telas from "../../components/Telas";
import Icon from 'react-native-vector-icons/Feather';
import TimerCountDownDisplay from "../../components/TimerCountDownDisplay";
import TimerPauseButton from "../../components/TimerPauseButton";

const FOCUS_TIME_MINUTES = 25 * 60 * 1000;
const BREAK_TIME_MINUTES = 5 * 60 * 1000;
const LONG_BREAK_TIME_MINUTES = 15 * 60 * 1000;

export default function Home({ navigation }) {
    const [showClock, setShowClock] = useState(false)
    const [pause, setPause] = useState(false)
    const [timerCount, setTimerCount] = useState(FOCUS_TIME_MINUTES)
    const [timerInterval, setTimerInterval] = useState(null)
    const [timerMode, setTimerMode] = useState("Focus")
    const [turns, setTurns] = useState(0)

    const style = styles(showClock)

    function startTimer() {
        setPause(false)
        setShowClock(true)
        const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000)
        setTimerInterval(id)
    }

    const stopTimer = () => {
        if (timerInterval !== null) {
            clearInterval(timerInterval)
        }
        setPause(true)
    }

    function cancelTimer() {
        setPause(false)
        setShowClock(false)
        if (timerInterval !== null) {
            clearInterval(timerInterval)
        }
        setTimerCount(FOCUS_TIME_MINUTES)
    }

    const timerDate = new Date(timerCount)

    useEffect(() => {
        if (timerCount == 0) {
            if (timerMode === "Focus" && turns == 0) {
                setTurns(turns + 1)
                setTimerCount(BREAK_TIME_MINUTES)
                setTimerMode("Break")
            } else if (timerMode === "Focus") {
                setTurns(0)
                setTimerCount(LONG_BREAK_TIME_MINUTES)
                setTimerMode("Long Break")
            } else {
                setTimerCount(FOCUS_TIME_MINUTES)
                setTimerMode("Focus")
            }
            stopTimer();
        }
    }, [timerCount])

    return <Telas style={style.main}>
        <View style={style.header}>
            <Text style={style.text}>{showClock ? `${timerMode} time!` : "Timer"}</Text>
        </View>
        <View style={style.clockArea}>
            {showClock ? <View>
                <TimerCountDownDisplay timerDate={timerDate} styles={[style.time, style.timerElement]} />

                <View style={style.buttonsWrapper}>
                    <TimerPauseButton pause={pause} startTimer={startTimer} stopTimer={stopTimer} styleButElement={style.buttonElement} styleBut={style.button} stylePauseBut={style.pauseButton} />
                    <TouchableOpacity
                        onPress={() => cancelTimer()}
                        style={[style.button, style.cancelButton, style.buttonElement]}
                    >
                        <Text>Cancel Timer</Text>
                    </TouchableOpacity>
                </View>
            </View> : <Pressable
                onPress={() => startTimer()}
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