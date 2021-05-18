import React, { memo } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors';
import Icon, { IconSets } from '../components/ui-elements/Icon';
import {
    LargeLabel,
    NormalLabel,
    SmallLabel,
} from '../components/ui-elements/TextLabels';
import { rootScreenList, ScreenCategory } from '../navigation/root-navigation';
import { globalStyles } from '../styles';
import { VeryLargeIconSize } from '../styles/styleConstants';

const ImageListOption: React.FC<any> = ({
    item = {},
    handlePress = () => {},
}): any => {
    const { title, subTitle, id } = item;
    const onPress = () => {
        return handlePress(item);
    };
    return (
        <TouchableOpacity onPress={onPress} style={styles.listItemContainer}>
            <View style={styles.listTitleContainer}>
                <SmallLabel style={[globalStyles.bold600, styles.listId]}>
                    {id}
                </SmallLabel>
                <LargeLabel style={[globalStyles.bold600, styles.listTitle]}>
                    {title}
                </LargeLabel>
                {subTitle && (
                    <NormalLabel
                        style={[globalStyles.bold400, styles.listSubtitle]}
                    >
                        {subTitle}
                    </NormalLabel>
                )}
            </View>
            <View style={styles.listIconContainer}>
                <Icon
                    name="arrow-right-circle"
                    // iconSet={IconSets.Feather}
                    size={VeryLargeIconSize}
                    color={colors.darkGreen}
                />
            </View>
        </TouchableOpacity>
    );
};

const HomeScreen = ({ navigation }) => {
    const handleItemPress = screenItem => {
        navigation.navigate(screenItem.id);
    };
    return (
        <SafeAreaView style={styles.screenContainer}>
            <FlatList
                data={rootScreenList.filter(
                    screenItem => screenItem.id !== ScreenCategory.HOME,
                )}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <ImageListOption
                        item={item}
                        handlePress={handleItemPress}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
    screenContainer: { marginTop: 10 },
    listItemContainer: {
        margin: 4,
        padding: 6,
        backgroundColor: colors.white_solid,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        elevation: 24,
    },
    listTitleContainer: {
        flex: 5,
        paddingHorizontal: 10,
        marginVertical: 15,
    },
    listIconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    listIcon: {
        height: '80%',
        width: '80%',
    },
    listId: {
        color: colors.toryBlue,
        paddingLeft: 1,
    },
    listTitle: {
        color: colors.outerSpace,
        paddingVertical: 2,
    },
    listSubtitle: {
        color: colors.outerSpace,
        paddingLeft: 1,
    },
});
