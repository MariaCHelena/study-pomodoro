import { StyleSheet } from "react-native";
import { cores } from "../../style";

export default StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%"
    },
    title: {
        fontSize: 24,
        color: cores.white,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginVertical: 12,
    },
    container: {
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: cores.gray,
        borderStyle: 'solid',
    },
    titleContainer: {
        color: cores.white,
        fontSize: 18
    },
    timerText: {
        color: cores.white,
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
        color: cores.white,
        fontWeight: "bold"
    }
})