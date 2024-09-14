import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';
import { LANGUAGE_KEYS, LanguageCodes } from './utils/constants';
import { I18nManager } from 'react-native';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en', // Default language
        fallbackLng: 'en',
        resources: {
            en: {
                translation: en, // English translations
            },
            ar: {
                translation: ar, // Arabic translations
            },
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        // Use async storage for storing language preference
        initImmediate: false,
    });

// Load language from AsyncStorage
const loadLanguage = async () => {
    try {
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEYS);
        const isRTL = savedLanguage === LanguageCodes.ARABIC;
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            I18nManager.forceRTL(isRTL);
            I18nManager.allowRTL(isRTL);
        }
    } catch (error) {
        console.log('Failed to load language:', error);
    }
};

// Call loadLanguage on startup
loadLanguage();

export default i18n;
