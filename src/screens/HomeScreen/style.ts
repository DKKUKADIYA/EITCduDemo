import { I18nManager, StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';
import { moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    subContainer: {
        flex: 1,
        padding: moderateScale(20),
    },
    movieItem: {
        flex: 1,
        margin: moderateScale(10),
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.primary,
        elevation: 4,
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingBottom: moderateScale(5),
    },
    poster: {
        width: 150,
        height: 190,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
    },
    title: {
        marginTop: moderateScale(5),
        fontSize: 16,
        textAlign: 'center',
        color: Colors.primary,
        fontWeight: 'bold',
        flex: 1,
        padding: moderateScale(5),
    },
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    noRecordFoundText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.primary,
        marginTop: moderateScale(10),
    },
    toolbar: {
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        padding: moderateScale(15),
        justifyContent: 'space-between',
    },
    toolbarTitle: {
        color: Colors.white,
        fontSize: 20,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(20),
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.backgroundColor,
    },
    pageNumber: {
        fontSize: 18,
        alignSelf: 'center',
        color: Colors.primary,
        fontWeight: 'bold',
    },
    paginationBtn: {
        backgroundColor: Colors.primary,
        padding: moderateScale(10),
        alignItems: 'center',
        elevation: 4,
        minWidth: 50,
    },
    paginationBtnDisabled: {
        backgroundColor: Colors.disable,
        padding: moderateScale(10),
        alignItems: 'center',
        elevation: 4,
        minWidth: 50,
    },
    listContainer: {
        marginBottom: moderateScale(50),
    },
    logout: {
        width: 25,
        height: 25,
    },
    leftArrow: {
        width: 25,
        height: 25,
        transform: [{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }],
    },
    rightArrow: {
        width: 25,
        height: 25,
        transform: [{ rotate: I18nManager.isRTL ? '0deg' : '180deg' }],
    },
});

export default styles;
