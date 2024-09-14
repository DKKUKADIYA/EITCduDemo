import { I18nManager, StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
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
        marginBottom: 15,
        padding: 10,
        backgroundColor: Colors.white,
        elevation: 3,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    dropdown: {
        height: 50,
        borderColor: Colors.primary,
        borderWidth: 1,
        paddingHorizontal: 8,
        backgroundColor: Colors.white,
        elevation: 3,
    },
    dropdownContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: '40%',
        marginRight: -8,
    },
    dropdownContainerStyle: {
        borderColor: Colors.primary,
        borderWidth: 1,
        backgroundColor: Colors.white,
        elevation: 3,
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
        padding: 15,
        alignItems: 'center',
        elevation: 3,
    },
    submitBtnDisabled: {
        backgroundColor: Colors.disable,
        padding: 15,
        alignItems: 'center',
        elevation: 3,
    },
    submitText: {
        color: Colors.white,
        fontWeight: 'bold',
    },
    poster: {
        width: 150,
        height: 150,
        backgroundColor: Colors.backgroundColor,
        alignSelf: 'center',
    },
});

export default styles;
