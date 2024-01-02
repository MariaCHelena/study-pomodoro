import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

import Telas from "../../components/Telas";
import style from "./style";

export default function Configurations() {
  const [focusTime, setFocusTime] = useState('00:00');
  const [shortBreak, setShortBreak] = useState('00:00');
  const [longBreak, setLongBreak] = useState('00:00');

  return (
    <Telas>
      <View style={style.main}>
        <Text style={style.title}>Configurations</Text>
        <View style={style.container}>
          <Text style={style.titleContainer}>Focus Time</Text>
          <TextInput
            value={focusTime}
            onChangeText={(value) => setFocusTime(String(value))}
            keyboardType='number-pad'
            style={style.timerText}
          />
        </View>
        <View style={style.container}>
          <Text style={style.titleContainer}>Short Break</Text>
          <TextInput
            value={shortBreak}
            onChangeText={(value) => setShortBreak(String(value))}
            keyboardType='number-pad'
            style={style.timerText}
          />
        </View>
        <View style={style.container}>
          <Text style={style.titleContainer}>Long Break</Text>
          <TextInput
            value={longBreak}
            onChangeText={(value) => setLongBreak(String(value))}
            keyboardType='number-pad'
            style={style.timerText}
          />
        </View>
      </View>
    </Telas>
  );
}
