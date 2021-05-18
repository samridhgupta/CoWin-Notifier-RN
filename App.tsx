import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/root-navigation';
import { NormalLabel } from './src/components/ui-elements/TextLabels';

const App = () => {
    return (
        <NavigationContainer>
            <NormalLabel>Hello</NormalLabel>
            <RootStack />
        </NavigationContainer>
    );
};

export default App;
