import SInfo from 'react-native-sensitive-info';

type SensitiveStorageInterface = {
    setItem: (key: string, value: string) => Promise<void>;
    getItem: (key: string) => Promise<string | null>;
    removeItem: (key: string) => Promise<void>;
}

const SensitiveStorage: SensitiveStorageInterface = {
    setItem: async (key: string, value: string) => {
        try {
            await SInfo.setItem(key, value, {
                sharedPreferencesName: 'mySharedPrefs',
                keychainService: 'myKeychain',
            });
        } catch (error) {
            console.log('Error saving data', error);
        }
    },
    getItem: async (key: string) => {
        try {
            return await SInfo.getItem(key, {
                sharedPreferencesName: 'mySharedPrefs',
                keychainService: 'myKeychain',
            });
        } catch (error) {
            console.log('Error retrieving data', error);
            return null;
        }
    },
    removeItem: async (key: string) => {
        try {
            await SInfo.deleteItem(key, {
                sharedPreferencesName: 'mySharedPrefs',
                keychainService: 'myKeychain',
            });
        } catch (error) {
            console.log('Error deleting data', error);
        }
    },
};

export default SensitiveStorage;
