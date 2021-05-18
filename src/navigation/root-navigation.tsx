import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AuthenticateUserScreen from '../screens/AuthenticateUserScreen';

export type screenItemType = {
    id: string;
    title: string;
    subTitle?: string;
    component: React.ComponentType<any>;
};

export const ScreenCategory: { [name: string]: string } = {
    HOME: 'Home',
    IMAGE_MARKER: 'Image Marker',
    BACKGROUND_MARKER: 'Background Marker',
};

export const rootScreensNames: {
    [name: string]: screenItemType;
} = {
    HOME: {
        id: 'Home',
        title: ScreenCategory.HOME,
        component: HomeScreen,
    },
    AUTHENTICATE_USER: {
        id: 'Authenticate User',
        title: 'Authenticate User',
        subTitle: 'Authenticate User',
        component: AuthenticateUserScreen,
    },
    //   LH295: {
    //     id: 'LH-295',
    //     title: ScreenCategory.IMAGE_MARKER,
    //     subTitle: 'Moveable Shape',
    //     component: LH295,
    //   },
};

export const rootScreenList: {
    id: string;
    title: string;
    key: string;
}[] = Object.keys(rootScreensNames).map(screenKey => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { component, ...screenDetails }: screenItemType =
        rootScreensNames[screenKey];
    return {
        ...screenDetails,
        key: screenKey,
    };
});

const Stack = createStackNavigator();
const RootStack = () => {
    return (
        <Stack.Navigator>
            <>
                {Object.keys(rootScreensNames).map(screenKey => (
                    <Stack.Screen
                        key={rootScreensNames[screenKey].id}
                        name={rootScreensNames[screenKey].id}
                        component={rootScreensNames[screenKey].component}
                        options={{
                            title: rootScreensNames[screenKey].id,
                            gestureEnabled: false,
                        }}
                    />
                ))}
            </>
        </Stack.Navigator>
    );
};

export default RootStack;
