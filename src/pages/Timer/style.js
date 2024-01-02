import { StyleSheet } from "react-native";
import { cores } from "../../style";

export default function styles(pause) {
    return StyleSheet.create({
        text: {
            color: cores.white,
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
            alignItems: "center"
        },
        time: {
            color: cores.white,
            fontSize: 86,
            alignItems: "center",
            textAlign: 'center'
        },
        button: {
            color: cores.white,
            padding: 18,
            backgroundColor: cores.yellow,
            textAlign: "center",
            alignItems: "center",
            borderRadius: 30,
            color: cores.white,
        },
        cancelButton: {
            backgroundColor: cores.green,
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