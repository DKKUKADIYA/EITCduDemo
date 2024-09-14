import { I18nManager, StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';
import { moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:  moderateScale(25),
        justifyContent: 'center',
        backgroundColor: Colors.backgroundColor,
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderColor: Colors.primary,
        borderWidth: 1,
        marginBottom:  moderateScale(15),
        padding:  moderateScale(10),
        backgroundColor: Colors.white,
        elevation: 4,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
        marginHorizontal:  moderateScale(2),
    },
    errorText: {
        color: Colors.red,
        marginBottom:  moderateScale(10),
        marginHorizontal:  moderateScale(2),
    },
    dropdown: {
        height: 45,
        borderColor: Colors.primary,
        borderWidth: 1,
        paddingHorizontal:  moderateScale(8),
        backgroundColor: Colors.white,
        elevation: 4,
        marginHorizontal:  moderateScale(2),
    },
    dropdownContainer: {
        position: 'absolute',
        top: 10,
        left: 0,
        width: '35%',
    },
    dropdownContainerStyle: {
        borderColor: Colors.primary,
        borderWidth: 1,
        backgroundColor: Colors.white,
        elevation: 4,
        marginHorizontal: moderateScale(1),
    },
    dropdownText: {
        fontSize: 16,
    },
    dropdownItemContainer: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
    },
    submitBtn: {
        backgroundColor: Colors.primary,
        padding:  moderateScale(15),
        alignItems: 'center',
        elevation: 4,
        marginHorizontal:  moderateScale(2),
    },
    submitBtnDisabled: {
        backgroundColor: Colors.disable,
        padding:  moderateScale(15),
        alignItems: 'center',
        elevation: 4,
        marginHorizontal: moderateScale(2),
    },
    submitText: {
        color: Colors.white,
        fontWeight: 'bold',
    },
    poster: {
        width: 120,
        height: 120,
        backgroundColor: Colors.backgroundColor,
        alignSelf: 'center',
        marginTop: moderateScale(50),
    },
});

export default styles;
