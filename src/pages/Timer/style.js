import { StyleSheet } from "react-native";

export default function styles(pause, tema) {
    return StyleSheet.create({
        text: {
            color: tema.text,
            fontSize: 32
        },
        startScreen: {
            alignItems: 'center',
            flex: 1
        },
        main: {
            alignItems: "center",
            paddingVertical: 32,
            width: "100%",
            flex: 1
        },
        header: {
            height: "20%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
        },
        pickerBox: {
            marginTop: 10,
            backgroundColor: tema.white,
        },
        pickerText: {
            fontSize: 18,
            color: tema.dark
        },    
        clockArea: {
            flexGrow: 1,
            width: 300,
            alignItems: "center"
        },
        timerElement: {
            marginTop: 120,
            alignItems: "center",
            color: tema.text
        },
        time: {
            color: tema.text,
            fontSize: 86,
            alignItems: "center",
            textAlign: 'center'
        },
        button: {
            color: tema.text,
            padding: 18,
            backgroundColor: tema.yellow,
            textAlign: "center",
            alignItems: "center",
            borderRadius: 30,
            color: tema.text,
            elevation: 5
        },
        textButton: {
            color: tema.dark,
            fontWeight: 'bold'
        },
        cancelButton: {
            backgroundColor: tema.green,
        },
        pauseButton:{
            width: (pause ? "100%" : "45%")
        },
        buttonElement: {
            flexGrow: 1,
            width: "45%",
        },
        buttonsWrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 10,
            marginTop: 20
        }
    })
}