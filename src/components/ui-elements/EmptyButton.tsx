// @flow
import React, { memo, FunctionComponent } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    StyleProp,
    TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors';
import { globalStyles } from '../../styles';

const coStyles = StyleSheet.create({
    buttonContainer: {
        ...globalStyles.button,
        ...globalStyles.flexRow,
        ...globalStyles.justifyCenter,
        ...globalStyles.alignCenter,
    },
});

export type EmptyButtonProps = {
    onPress: () => void;
    showLoading?: boolean;
    buttonStyle?: StyleProp<any>;
    disabled?: boolean;
    children?: any;
};

const EmptyButton: FunctionComponent<EmptyButtonProps> = props => {
    const {
        onPress,
        showLoading = false,
        buttonStyle,
        disabled = false,
        children,
    } = props;

    const renderLoadingIndicator = () => {
        return <ActivityIndicator size={'small'} color={colors.white} />;
    };

    const renderButtonContent = () => {
        if (showLoading) {
            return renderLoadingIndicator();
        }
        return children;
    };

    const handleOnPress = () => {
        if (disabled) {
            return;
        }
        onPress && onPress();
    };

    return (
        <TouchableOpacity
            style={[coStyles.buttonContainer, buttonStyle]}
            onPress={handleOnPress}
            disabled={disabled}
        >
            {renderButtonContent()}
        </TouchableOpacity>
    );
};

export default memo(EmptyButton);
