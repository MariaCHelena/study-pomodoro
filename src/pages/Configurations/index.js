import React, { useContext } from "react";
import { Text, View, TextInput, Switch } from "react-native";

import Telas from "../../components/Telas";
import { styles } from "./style";
import { timerContext } from "../../contexts/timerContext";
import { themeContext } from "../../contexts/themeContext";
import Header from "../../components/Header";

export default function Configurations() {
  const { temaAtual, temaEscolhido, saveThemeAsync } = useContext(themeContext)

  const style = styles(temaEscolhido)

  const { focus, setFocus, shortBreak, setShortBreak, longBreak, setLongBreak } = useContext(timerContext)

  function displayValue(value, action) {
    action(value)
    return String(value)
  }

  return (
    <Telas style={style.main}>
      <Header iconColor={temaEscolhido.text}/>
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
        <View style={[style.container, style.themeContainer]}>
          <Text style={style.titleContainer}>Theme: {temaAtual === 'escuro' ? 'dark' : 'light'}</Text>
          <Switch
            value={temaAtual === 'escuro' ? true : false}
            onValueChange={() => temaAtual === 'escuro' ?
              saveThemeAsync('claro') :
              saveThemeAsync('escuro')
            }
          />
        </View>
      </View>
    </Telas>
  );
}
