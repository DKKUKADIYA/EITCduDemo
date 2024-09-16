import axios from 'axios';
import { API_KEY, authToken, MOVIE_DB_BASE_URL } from '../utils/constants';
import { Alert } from 'react-native';
import { t } from 'i18next';

type Movie = {
    id: number;
    title: string;
    poster_path: string;
};

type ApiResponse = {
    results: Movie[];
};

export const fetchPopularMovies = async (selectedLanguage: string, page: number): Promise<Movie[]> => {
    try {
        const response = await axios.get<ApiResponse>(MOVIE_DB_BASE_URL, {
            params: {
                api_key: API_KEY,
                language: selectedLanguage,
                page: page,
            },
            headers: {
                'Authorization': authToken,
                'Accept': 'application/json',
            },
            timeout: 10000,
        });
        if (response.status === 200) {
            return response?.data?.results || [];
        } else {
            return [];
        }
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
};

const handleApiError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        Alert.alert(t('home.networkTitle'), t('home.networkErrorMsg'));
    } else {
        console.log('Unknown Error:', error);
    }
};
