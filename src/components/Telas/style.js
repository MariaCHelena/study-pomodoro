import { StyleSheet } from "react-native";

export default function styled(tema) {
    return StyleSheet.create({
        tela: {
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: 32,
            justifyContent: 'center',
            paddingBottom: 64,
            backgroundColor: tema.background,
        }
    })
}
