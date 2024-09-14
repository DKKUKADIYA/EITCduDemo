import axios from 'axios';
import { API_KEY, authToken, MOVIE_DB_BASE_URL } from '../../utils/constants';

// Define the movie data type returned by the TMDb API
interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

// Define the API response type
interface ApiResponse {
    results: Movie[];
}

// Fetch popular movies List using "axios".
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
            timeout: 10000, // Add timeout it is optional
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

// Handle API errors
const handleApiError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        console.log('Axios Error:', error.message);
    } else {
        console.log('Unknown Error:', error);
    }
};
