import { I18nManager, StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    subContainer: {
        flex: 1,
        padding: 20,
    },
    movieItem: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.primary,
        elevation: 3,
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingBottom: 5,
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
        marginTop: 5,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.primary,
        fontWeight: 'bold',
        flex: 1,
        padding: 5,
    },
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    noRecordFoundText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.primary,
        marginTop: 10,
    },
    toolbar: {
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        padding: 15,
        justifyContent: 'space-between',
    },
    toolbarTitle: {
        color: Colors.white,
        fontSize: 20,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
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
        padding: 10,
        alignItems: 'center',
        elevation: 3,
        minWidth: 50,
    },
    paginationBtnDisabled: {
        backgroundColor: Colors.disable,
        padding: 10,
        alignItems: 'center',
        elevation: 3,
        minWidth: 50,
    },
    paginationText: {
        color: Colors.white,
        fontWeight: 'bold',
    },
    listContainer: {
        marginBottom: 50,
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
