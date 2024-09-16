import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import MainNavigator from './src/navigation/MainNavigator';
import './src/i18n';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nManager } from 'react-native';
import i18n from './src/i18n';
import { LANGUAGE_KEYS, LanguageCodes } from './src/utils/constants';
import Restart from 'react-native-restart';
import SensitiveStorage from './src/utils/SensitiveStorage';

const App = () => {

  useEffect(() => {
    const initializeAppSettings = async () => {
      try {
        const savedLanguage = await SensitiveStorage.getItem(LANGUAGE_KEYS);
        const isRTL = savedLanguage === LanguageCodes.ARABIC;
        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage);
          I18nManager.forceRTL(isRTL);
          I18nManager.allowRTL(isRTL);
        }
        if (I18nManager.isRTL !== isRTL) {
          Restart.Restart();
        }
      } catch (error) {
        console.log('Failed to load settings:', error);
      }
    };

    initializeAppSettings();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
