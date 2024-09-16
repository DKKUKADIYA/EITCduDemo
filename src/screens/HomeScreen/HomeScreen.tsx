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
    RefreshControl,
} from 'react-native';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { clearCredentials } from '../../redux/reducers/loginSlice';
import { persistor, RootState } from '../../redux/store';
import { CommonActions } from '@react-navigation/native';
import { ROUTE_DESTINATION } from '../../navigation/routes';
import Pagination from './components/Pagination';
import MovieItem from './components/MovieItem';
import FastImage from 'react-native-fast-image';
import { images } from '../../assets/images';
import { Colors } from '../../utils/colors';
import { fetchPopularMovies } from '../../network/fetchHelper';

type Movie = {
    id: number;
    title: string;
    poster_path: string;
}

type HomeScreenProps = {
    navigation: {
        [x: string]: any;
        replace: (screen: string) => void;
    };
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState(false);
    const [page, setPage] = useState<number>(1);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { selectedLanguage } = useSelector((state: RootState) => state.language);

    const fetchMovies = useCallback(async () => {
        setLoading(true);
        try {
            const movieData = await fetchPopularMovies(selectedLanguage, page);
            setMovies(movieData);
        } catch (error) {
            setMovies([]);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, [page, selectedLanguage]);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    const renderEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.noRecordFoundText}>{t('home.noRecordFound')}</Text>
        </View>
    );

    const handleLogout = () => {
        Alert.alert(t('home.logout'), t('home.logout_msg'), [
            {
                text: t('home.cancel'),
            },
            {
                text: t('home.yes'),
                onPress: () => {
                    dispatch(clearCredentials());
                    persistor.purge().then(() => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: ROUTE_DESTINATION }],
                            })
                        );
                    });
                },
            },
        ]);
    };

    const renderItem = useCallback(({ item }: { item: Movie }) => {
        return <MovieItem item={item} />;
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchMovies();
    }, [fetchMovies]);

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
                        <ActivityIndicator size={'large'} color={Colors.primary} />
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
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={[Colors.primary]}
                            />
                        }
                    />
                )}
                <Pagination
                    onPreviousPageChange={() => setPage((prevPage) => prevPage - 1)}
                    onNextPageChange={() => setPage((prevPage) => prevPage + 1)}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
