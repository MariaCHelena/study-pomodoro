import React, { useContext } from "react";
import { Text, View, TextInput } from "react-native";

import Telas from "../../components/Telas";
import style from "./style";
import { timerContext } from "../../contexts/timerContext";

export default function Configurations() {

  const {focus, setFocus, shortBreak, setShortBreak, longBreak, setLongBreak} = useContext(timerContext)

  function displayValue(value, action){
    action(value)
    return String(value)
  }

  return (
    <Telas>
      <View style={style.main}>
        <Text style={style.title}>Configurations</Text>
        <View style={style.container}>
          <Text style={style.titleContainer}>Focus Time</Text>
          <View style={style.textInputView}>
            <TextInput
              value={String(focus)}
              onChangeText={(value) => displayValue(value, setFocus)}
              keyboardType='number-pad'
              style={style.timerText}
            />
            <Text style={style.labelText}>min</Text>
          </View>
        </View>
        <View style={style.container}>
          <Text style={style.titleContainer}>Short Break</Text>
          <View style={style.textInputView}>
            <TextInput
              value={String(shortBreak)}
              onChangeText={(value) => displayValue(value, setShortBreak)}
              keyboardType='number-pad'
              style={style.timerText}
            />
            <Text style={style.labelText}>min</Text>
          </View>
        </View>
        <View style={style.container}>
          <Text style={style.titleContainer}>Long Break</Text>
          <View style={style.textInputView}>
            <TextInput
              value={String(longBreak)}
              onChangeText={(value) => displayValue(value, setLongBreak)}
              keyboardType='number-pad'
              style={style.timerText}
            />
            <Text style={style.labelText}>min</Text>
          </View>
        </View>
      </View>
    </Telas>
  );
}
