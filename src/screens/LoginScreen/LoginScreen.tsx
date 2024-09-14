import React, { useEffect, useState, useCallback } from 'react';
import {
    TextInput,
    TouchableOpacity,
    Text,
    StatusBar,
    SafeAreaView,
    ScrollView,
    I18nManager,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../redux/loginSlice';
import { changeLanguage } from '../../redux/languageSlice';
import { useTranslation } from 'react-i18next';
import styles from './style';
import { Dropdown } from 'react-native-element-dropdown';
import { LANGUAGE_KEYS, LanguageCodes, Languages } from '../../utils/constants';
import { RootState } from '../../redux/store';
import FastImage from 'react-native-fast-image';
import { validateEmail, validatePassword } from '../../utils/validations';
import { ROUTE_HOME, ROUTE_SPLASH } from '../../navigation/routes';
import { images } from '../../assets/images';
import { Colors } from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Restart from 'react-native-restart';

// Define the props for the component
interface LoginScreenProps {
    navigation: {
        [x: string]: any;
        replace: (screen: string) => void;
    };
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginBtnDisabled, setLoginBtnDisabled] = useState(true);
    const { selectedLanguage } = useSelector((state: RootState) => state.language);
    const [selectedValue, setSelectedValue] = useState<string>(selectedLanguage);
    const dispatch = useDispatch();

    // Enable/Disable submit button based on validation
    useEffect(() => {
        setLoginBtnDisabled(!validateEmail(email) || !validatePassword(password) || !email || !password);
    }, [email, password]);

    // Handle form submission
    const onLoginBtnClick = useCallback(() => {
        dispatch(setCredentials({ email, password }));
        navigation.replace(ROUTE_HOME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email, password]);

    // Handle language change and navigation
    const handleLanguageChange = useCallback(async (lang: string) => {
        if (lang === selectedLanguage) {
            return;
        }
        setSelectedValue(lang);
        i18n.changeLanguage(lang);
        dispatch(changeLanguage(lang));
        await AsyncStorage.setItem(LANGUAGE_KEYS, lang);

        // Apply RTL or LTR based on the selected language
        const isRTL = lang === LanguageCodes.ARABIC;
        I18nManager.forceRTL(isRTL);
        I18nManager.allowRTL(isRTL);

        navigation.reset({
            index: 0,
            routes: [{ name: ROUTE_SPLASH }],
        });

        //After change language app restart for rtl to ltr and ltr to rtl convert
        Restart.Restart();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <ScrollView contentContainerStyle={styles.subContainer} bounces={false}>
                <FastImage
                    source={images.logo}
                    style={styles.poster}
                />
                <View style={styles.dropdownContainer}>
                    <Dropdown
                        style={styles.dropdown}
                        selectedTextStyle={styles.dropdownText}
                        containerStyle={styles.dropdownContainerStyle}
                        itemContainerStyle={styles.dropdownItemContainer}
                        data={Languages}
                        labelField="label"
                        valueField="value"
                        value={selectedValue}
                        onChange={item => handleLanguageChange(item?.value)}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={t('login.email')}
                    value={email}
                    onChangeText={(val) => {
                        setEmail(val);
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {!validateEmail(email) ? <Text style={styles.errorText}>{t('login.emailInvalid')}</Text> : null}

                <TextInput
                    style={styles.input}
                    placeholder={t('login.password')}
                    value={password}
                    onChangeText={(val) => {
                        setPassword(val);
                    }}
                    secureTextEntry
                    maxLength={15}
                />
                {!validatePassword(password) ? <Text style={styles.errorText}>{t('login.passwordInvalid')}</Text> : null}

                <TouchableOpacity
                    disabled={loginBtnDisabled}
                    style={loginBtnDisabled ? styles.submitBtnDisabled : styles.submitBtn}
                    onPress={onLoginBtnClick}
                >
                    <Text style={styles.submitText}>{t('login.login')}</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
