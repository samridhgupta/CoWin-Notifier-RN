import React, { FunctionComponent, memo } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import colors from '../../assets/colors';
import IconButton from './IconButton';
import { globalStyles } from '../../styles';
import { MediumLabel, NormalLabel } from './TextLabels';

const coStyles = StyleSheet.create({
    outputBox: {
        ...globalStyles.positionAbsolute,
        backgroundColor: colors.white_solid,
        borderRadius: 5,
        padding: 8,
    },
});

type OutputBoxProps = {
    title: string;
    outputText: string;
    onClosePress: any;
};
const OutputBox: FunctionComponent<OutputBoxProps> = props => {
    const { title, outputText, onClosePress } = props;
    const { height, width } = useWindowDimensions();
    const boxStyle = {
        top: height / 4,
        left: width / 4,
        width: width / 2,
    };
    return (
        <View style={[coStyles.outputBox, boxStyle, globalStyles.alignCenter]}>
            <MediumLabel style={[globalStyles.bold600]}>{title}</MediumLabel>
            <View style={{ paddingVertical: 10 }}>
                <NormalLabel style={[globalStyles.textCenter]}>
                    {outputText}
                </NormalLabel>
            </View>
            <IconButton
                iconName={'close'}
                onPress={() => {
                    onClosePress && onClosePress();
                }}
            />
        </View>
    );
};
export default memo(OutputBox);
