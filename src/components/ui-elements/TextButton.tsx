// @flow
import React, { memo } from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles';
import EmptyButton, { EmptyButtonProps } from './EmptyButton';

type Props = {
    text: string;
    textStyle?: any;
} & EmptyButtonProps;

const TextButton = (props: Props) => {
    const {
        text,
        onPress,
        showLoading = false,
        buttonStyle,
        disabled = false,
        textStyle = {},
    } = props;

    return (
        <EmptyButton
            buttonStyle={[globalStyles.textButton, buttonStyle]}
            onPress={onPress}
            showLoading={showLoading}
            disabled={disabled}
        >
            <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={[globalStyles.buttonText, textStyle]}
            >
                {text}
            </Text>
        </EmptyButton>
    );
};

export default memo(TextButton);
