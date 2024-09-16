import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';
import { LANGUAGE_KEYS, LanguageCodes } from './utils/constants';
import { I18nManager } from 'react-native';
import SensitiveStorage from './utils/SensitiveStorage';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        resources: {
            en: {
                translation: en,
            },
            ar: {
                translation: ar,
            },
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        initImmediate: false,
    });

const loadLanguage = async () => {
    try {
        const savedLanguage = await SensitiveStorage.getItem(LANGUAGE_KEYS);
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

loadLanguage();

export default i18n;
