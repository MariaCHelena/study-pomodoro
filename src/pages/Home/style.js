import { StyleSheet } from "react-native";

export default function styles(tema) {
    return StyleSheet.create({
        welcome: {
            fontWeight: 'bold',
            fontSize: 30,
            color: tema.yellow,
            marginBottom: '10%',
            textAlign: "center",
            elevation: 4,
        },
        motivation: {
            fontSize: 18,
            color: tema.text,
            marginBottom: "10%",
            textAlign: "center"
        },
        buttonsWrapper: {
            width: "80%",
            marginHorizontal: 'auto',
            alignItems: 'center'
        },
        buttons: {
            marginTop: 18,
            backgroundColor: tema.green,
            width: '100%',
            borderRadius: 50,
            textAlign: 'center',
            alignItems: 'center',
            paddingVertical: 18,
            elevation: 5
        },
        textButton: {
            color: tema.text,
            fontWeight: "bold",
            fontSize: 16,
        }
    })
}