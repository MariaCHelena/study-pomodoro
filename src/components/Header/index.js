import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import { View } from "react-native-animatable";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Header({ iconColor }) {
    const navigation = useNavigation()

    return <View style={styles.main}>
        <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
        >
            <Icon
                style={[styles.icon, {color: iconColor}]}
                name="arrowleft"
                size={35}
            />
        </TouchableWithoutFeedback>
    </View>
}

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingLeft: 20,
        paddingTop: 20,
        width: "100%"
    },
    icon: {

    }
})