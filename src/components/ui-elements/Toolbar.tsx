import React, { FunctionComponent } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import colors from '../../assets/colors';
import EmptyButton from './EmptyButton';
import Icon, { IconSets } from './Icon';
import { globalStyles } from '../../styles';
import { ButtonHeight, LargeIconSize } from '../../styles/styleConstants';

export type toolbarButtonObjectType = {
    id: string;
    icon: string;
    iconSet?: string;
};

export const TOOLBAR_HEIGHT = ButtonHeight * 1.2;

export type toolbarButtonsListType = {
    [key: string]: toolbarButtonObjectType;
};
const coStyles = StyleSheet.create({
    container: { backgroundColor: colors.outerSpace },
    toolbarContainerPortrait: {
        height: TOOLBAR_HEIGHT,
        bottom: 0,
        width: '100%',
    },
    toolbarContainerLandscape: {
        width: TOOLBAR_HEIGHT,
        right: 0,
        height: '100%',
    },
    buttonContainer: {
        ...globalStyles.flexOne,
        ...globalStyles.justifyCenter,
        ...globalStyles.alignCenter,
    },
});
type ToolbarProps = {
    buttons: toolbarButtonsListType;
    buttonPress: (buttonId: string) => void;
};
const Toolbar: FunctionComponent<ToolbarProps> = ({ buttons, buttonPress }) => {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    const containerStyle = isLandscape
        ? coStyles.toolbarContainerLandscape
        : { ...coStyles.toolbarContainerPortrait, ...globalStyles.flexRow };
    return (
        <View
            style={[
                globalStyles.positionAbsolute,
                globalStyles.alignCenter,
                globalStyles.justifyCenter,
                coStyles.container,
                containerStyle,
            ]}
        >
            {Object.values(buttons).map(
                (buttonObject: toolbarButtonObjectType) => {
                    const { id, icon, iconSet } = buttonObject;
                    return (
                        <EmptyButton
                            key={id}
                            buttonStyle={coStyles.buttonContainer}
                            onPress={() => buttonPress(id)}
                        >
                            <Icon
                                name={icon}
                                iconSet={iconSet || IconSets.FontAwesome}
                                size={LargeIconSize}
                                color={colors.silver}
                            />
                        </EmptyButton>
                    );
                },
            )}
        </View>
    );
};

export default Toolbar;
