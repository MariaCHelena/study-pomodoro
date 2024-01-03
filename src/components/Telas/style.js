import { StyleSheet } from "react-native";

export default function styled(tema) {
    return StyleSheet.create({
        tela: {
            flex: 1,
            alignItems: 'center',
            padding: 52,
            justifyContent: 'center',
            paddingVertical: 64,
            backgroundColor: tema.background,
        }
    })
}
