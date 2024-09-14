import React from 'react';
import { Text, View } from 'react-native';
import styles from '../style';
import { POSTER_BASE_URL } from '../../../utils/constants';
import FastImage from 'react-native-fast-image';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

interface MovieItemProps {
    item: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ item }) => {
    const { title = '', poster_path = '' } = item;
    return (
        <View style={styles.movieItem}>
            <FastImage
                source={{ uri: `${POSTER_BASE_URL}${poster_path}` }}
                style={styles.poster}
                resizeMode={FastImage.resizeMode.stretch}
            />
            <Text numberOfLines={2} style={styles.title}>{title}</Text>
        </View>
    );
};

export default MovieItem;
