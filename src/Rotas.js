import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from "./pages/Home";
import Timer from "./pages/Timer";
import Configurations from "./pages/Configurations";

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Timer" component={Timer}/>
            <Stack.Screen name="Configurations" component={Configurations} />
        </Stack.Navigator>
    </NavigationContainer>
}
