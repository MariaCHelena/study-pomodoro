import { StyleSheet } from "react-native";

export const styles = (tema) => {
    return StyleSheet.create({
        main: {
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-start",
            paddingVertical: 32,
            width: "100%"
        },
        title: {
            fontSize: 24,
            color: tema.text,
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: 12,
        },
        container: {
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderBottomColor: tema.gray,
            borderStyle: 'solid',
        },
        titleContainer: {
            color: tema.text,
            fontSize: 18
        },
        timerText: {
            color: tema.text,
            fontWeight: "bold",
            fontSize: 24,
        },
        textInputView: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        labelText: {
            fontSize: 20,
            color: tema.text,
            fontWeight: "bold"
        },
        themeContainer: {
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    })
}