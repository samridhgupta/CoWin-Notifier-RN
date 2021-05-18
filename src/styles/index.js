import { StyleSheet } from 'react-native';
import colors from '../assets/colors';
import * as styleConstants from './styleConstants';

const globalStyles = StyleSheet.create({
    clip: {
        overflow: 'hidden',
    },
    textCenter: {
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right',
    },
    underLine: {
        textDecorationLine: 'underline',
    },
    boldText: {
        fontWeight: '500',
    },
    bold300: {
        fontWeight: '300',
    },
    bold400: {
        fontWeight: '400',
    },
    bold500: {
        fontWeight: '500',
    },
    bold600: {
        fontWeight: '600',
    },
    smallText: { fontSize: styleConstants.SmallFontSize },
    normalText: { fontSize: styleConstants.NormalFontSize },
    mediumText: { fontSize: styleConstants.MediumFontSize },
    largeText: { fontSize: styleConstants.LargeFontSize },
    capitalize: { textTransform: 'capitalize' },
    justifyCenter: {
        justifyContent: 'center',
    },
    formTitleText: {
        marginHorizontal: 4,
        marginBottom: 10,
    },
    formComponent: {
        flex: 1,
        paddingHorizontal: 10,
    },
    formValidationText: {
        marginHorizontal: 4,
        marginTop: 5,
        textAlign: 'right',
    },
    positionAbsolute: { position: 'absolute' },
    flexRow: { flexDirection: 'row' },
    flexOne: { flex: 1 },
    flexTwo: { flex: 2 },
    flexThree: { flex: 3 },
    width100: { width: '100%' },
    height100: { height: '100%' },
    justifyEnd: { justifyContent: 'flex-end' },
    alignStart: { alignItems: 'flex-start' },
    alignEnd: { alignItems: 'flex-end' },
    alignCenter: { alignItems: 'center' },
    justifyBetween: { justifyContent: 'space-between' },
    justifyAround: { justifyContent: 'space-around' },
    justifyEvenly: { justifyContent: 'space-evenly' },
    button: {
        borderRadius: styleConstants.ButtonBorderRadius,
        margin: styleConstants.ButtonMargin,
        padding: styleConstants.ButtonPadding,
    },
    textButton: {
        height: styleConstants.ButtonHeight,
        width: styleConstants.TextButtonWidth,
        backgroundColor: colors.macaroniAndCheese,
    },
    buttonText: {
        fontSize: styleConstants.NormalFontSize,
        fontWeight: styleConstants.MediumFontWeight,
        color: colors.darkGrey,
    },
    iconButton: {
        height: styleConstants.ButtonHeight,
        width: styleConstants.ButtonHeight,
        backgroundColor: colors.curious_blue,
    },
});

export { globalStyles };
