import React, { FunctionComponent, memo } from 'react';
import { Text, TextProps } from 'react-native';
import { globalStyles } from '../../styles';

export const SmallLabel: FunctionComponent<TextProps> = memo(
    ({ style, ...otherProps }) => (
        <Text style={[style, globalStyles.smallText]} {...otherProps} />
    ),
);

export const NormalLabel: FunctionComponent<TextProps> = memo(
    ({ style, ...otherProps }) => (
        <Text style={[style, globalStyles.normalText]} {...otherProps} />
    ),
);

export const MediumLabel: FunctionComponent<TextProps> = memo(
    ({ style, ...otherProps }) => (
        <Text style={[style, globalStyles.mediumText]} {...otherProps} />
    ),
);

export const LargeLabel: FunctionComponent<TextProps> = memo(
    ({ style, ...otherProps }) => (
        <Text style={[style, globalStyles.largeText]} {...otherProps} />
    ),
);
