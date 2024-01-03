import { StyleSheet } from "react-native";

export default function styles(pause, tema) {
    return StyleSheet.create({
        text: {
            color: tema.text,
            fontSize: 32
        },
        main: {
            alignItems: "center",
            paddingVertical: 32,
            width: "100%"
        },
        header: {
            height: "20%",
            justifyContent: "center",
            alignItems: "center",
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