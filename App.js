import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


import Inputs from './inputs';
import PersonSearch from './personsearch';

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name = "Ingresar" component={Inputs}/>
                <Drawer.Screen name = "Buscar" component={PersonSearch}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App
