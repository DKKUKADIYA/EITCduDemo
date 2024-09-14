import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import MainNavigator from './src/navigation/MainNavigator';
import './src/i18n';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './src/i18n';
import { LANGUAGE_KEYS, LanguageCodes } from './src/utils/constants';
import Restart from 'react-native-restart';

const App = () => {

  useEffect(() => {
    const initializeAppSettings = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEYS);
        const isRTL = savedLanguage === LanguageCodes.ARABIC;
        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage);
          I18nManager.forceRTL(isRTL);
          I18nManager.allowRTL(isRTL);
        }
        // Check if RTL/LTR needs app restart to apply properly
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
          <PaperProvider>
            <MainNavigator />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
