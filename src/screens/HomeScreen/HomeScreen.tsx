import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    SafeAreaView,
    StatusBar,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { fetchPopularMovies } from './tmdb';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { clearCredentials } from '../../redux/loginSlice';
import { persistor, RootState } from '../../redux/store';
import { CommonActions } from '@react-navigation/native';
import { ROUTE_SPLASH } from '../../navigation/routes';
import Pagination from './components/Pagination';
import MovieItem from './components/MovieItem';
import FastImage from 'react-native-fast-image';
import { images } from '../../assets/images';
import { Colors } from '../../utils/colors';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

// Define the props for the component
interface HomeScreenProps {
    navigation: {
        [x: string]: any;
        replace: (screen: string) => void;
    };
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const totalPages = 5;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { selectedLanguage } = useSelector((state: RootState) => state.language);

    //To fetch Popular Movies list from DB
    const fetchMovies = useCallback(async () => {
        setLoading(true);
        try {
            const movieData = await fetchPopularMovies(selectedLanguage, page);
            setMovies(movieData);
        } catch (error) {
            setMovies([]);
        } finally {
            setLoading(false);
        }
    }, [page, selectedLanguage]);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    //To display "No Record Found" if list is empty or API fail.
    const renderEmptyComponent = () => (
        <View style={styles.indicatorContainer}>
            <Text style={styles.noRecordFoundText}>{t('home.noRecordFound')}</Text>
        </View>
    );

    //To handle Logout
    const handleLogout = () => {
        Alert.alert(t('home.logout'), t('home.logout_msg'), [
            {
                text: t('home.cancel'),
            },
            {
                text: t('home.yes'),
                onPress: () => {
                    // Clear Redux state
                    dispatch(clearCredentials());
                    // Purge persisted state
                    persistor.purge().then(() => {
                        // Reset the navigation stack
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: ROUTE_SPLASH }],
                            })
                        );
                    });
                },
            },
        ]);
    };

    const renderItem = ({ item }: { item: Movie }) => {
        return <MovieItem item={item} />;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.toolbar}>
                <Text style={styles.toolbarTitle}>{t('home.title')}</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <FastImage
                        source={images.logout}
                        style={styles.logout}
                        tintColor={Colors.white}
                    />
                </TouchableOpacity>
            </View>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <View style={styles.subContainer}>
                {loading ? (
                    <View style={styles.indicatorContainer}>
                        <ActivityIndicator size={'large'} />
                    </View>
                ) : (
                    <FlatList
                        data={movies}
                        style={styles.listContainer}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={(item) => item?.id?.toString()}
                        numColumns={2}
                        ListEmptyComponent={() => renderEmptyComponent()}
                    />
                )}
                <Pagination
                    onPreviousPageChange={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                    onNextPageChange={() => setPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
