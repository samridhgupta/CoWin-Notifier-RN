// @flow
import React, { memo } from 'react';
import colors from '../../assets/colors';
import { globalStyles } from '../../styles';
import { MediumIconSize } from '../../styles/styleConstants';
import EmptyButton, { EmptyButtonProps } from './EmptyButton';
import Icon, { IconSets } from './Icon';

type Props = {
    iconSet?: string;
    iconName: string;
    iconColor?: string;
    iconSize?: number;
} & EmptyButtonProps;

const IconButton = (props: Props) => {
    const {
        onPress,
        showLoading = false,
        buttonStyle,
        disabled = false,
        iconSet = IconSets.FontAwesome,
        iconName = 'rocket',
        iconSize,
        iconColor,
    } = props;

    return (
        <EmptyButton
            buttonStyle={[globalStyles.iconButton, buttonStyle]}
            onPress={onPress}
            showLoading={showLoading}
            disabled={disabled}
        >
            <Icon
                iconSet={iconSet}
                name={iconName}
                size={iconSize || MediumIconSize}
                color={iconColor || colors.darkGrey}
            />
        </EmptyButton>
    );
};

export default memo(IconButton);
