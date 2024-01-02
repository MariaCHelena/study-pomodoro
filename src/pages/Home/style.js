import { StyleSheet } from "react-native";
import { cores } from "../../style";

export default StyleSheet.create({
    main: {
        
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 30,
        color: cores.yellow,
        marginTop: 16,
        marginBottom: '10%',
        textAlign: "center",
    },
    motivation: {
        fontSize: 18,
        color: cores.white,
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
        backgroundColor: cores.green,

        width: '100%',
        borderRadius: 50,
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 18,
        elevation: 5
    },
    textButton: {
        color: cores.white,
        fontWeight: "bold",
        fontSize: 16,
    }
})