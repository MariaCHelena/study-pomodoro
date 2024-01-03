import React, { useContext, useEffect, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

import { Picker } from '@react-native-picker/picker'

import styles from "./style";

import Telas from "../../components/Telas";
import Icon from 'react-native-vector-icons/Feather';
import TimerCountDownDisplay from "../../components/TimerCountDownDisplay";
import TimerPauseButton from "../../components/TimerPauseButton";

import { themeContext } from "../../contexts/themeContext";
import { timerContext } from "../../contexts/timerContext";
import Header from "../../components/Header";

export default function Home() {

    const { temaEscolhido } = useContext(themeContext)

    const { focus, shortBreak, longBreak } = useContext(timerContext)
    const FOCUS_TIME_MINUTES = focus * 60 * 1000;
    const BREAK_TIME_MINUTES = shortBreak * 60 * 1000;
    const LONG_BREAK_TIME_MINUTES = longBreak * 60 * 1000;

    const timerDictionary = {
        "Focus": FOCUS_TIME_MINUTES,
        "Short Break": BREAK_TIME_MINUTES,
        "Long Break": LONG_BREAK_TIME_MINUTES
    }

    const [showClock, setShowClock] = useState(false)
    const [pause, setPause] = useState(false)
    const [timerCount, setTimerCount] = useState(FOCUS_TIME_MINUTES)
    const [timerInterval, setTimerInterval] = useState(null)
    const [timerMode, setTimerMode] = useState("Focus")
    const [turns, setTurns] = useState(0)

    const style = styles(showClock, temaEscolhido)

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

    function changeTimeMode(item) {
        clearInterval(timerInterval)
        setTimerMode(item)
        setTimerCount(timerDictionary[item])
        setTurns(0)
        startTimer()
    }

    function cancelTimer() {
        setPause(false)
        setShowClock(false)
        setTimerMode("Focus")
        if (timerInterval !== null) {
            clearInterval(timerInterval)
        }
        setTimerCount(FOCUS_TIME_MINUTES)
    }

    function resetTimer(){
        setTimerCount(timerDictionary[timerMode])
        stopTimer(true)
    }

    const timerDate = new Date(timerCount)

    useEffect(() => {
        if (timerCount == 0) {
            if (timerMode === "Focus" && turns == 0) {
                setTurns(turns + 1)
                setTimerCount(BREAK_TIME_MINUTES)
                setTimerMode("Short Break")
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
        <Header iconColor={temaEscolhido.text} />
        <View style={style.clockArea}>
            {showClock ? <View>
                <Picker
                    selectedValue={timerMode}
                    onValueChange={(item) => {
                        changeTimeMode(item)
                    }}
                    style={style.pickerBox}
                >
                    <Picker.Item label="Focus Timer" value="Focus" style={style.pickerText}  />
                    <Picker.Item label="Short Break" value="Short Break"
                        style={style.pickerText} />
                    <Picker.Item label="Long Break" value="Long Break"
                        style={style.pickerText}  />
                </Picker>
                <TimerCountDownDisplay timerDate={timerDate} styles={[style.time, style.timerElement]} />

                <View style={style.buttonsWrapper}>
                    <TimerPauseButton pause={pause} startTimer={startTimer} stopTimer={stopTimer} styleButElement={style.buttonElement} styleBut={style.button} stylePauseBut={style.pauseButton} styleTextBut={style.textButton} />
                    <TouchableOpacity
                        onPress={() => resetTimer()}
                        style={[style.button, style.cancelButton, style.buttonElement]}
                    >
                        <Text style={style.textButton}>Reset Timer</Text>
                    </TouchableOpacity>
                </View>
            </View> : <View style={style.startScreen}>
                <View style={style.header}>
                    <Text style={style.text}>Press the button to start the timer</Text>
                </View>
                <Pressable
                    onPress={() => startTimer()}
                >
                    <Icon
                        style={style.timerElement}
                        name="play-circle"
                        size={120}
                    />
                </Pressable>
            </View>}
        </View>
    </Telas>
}