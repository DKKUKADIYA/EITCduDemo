import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../style';
import FastImage from 'react-native-fast-image';
import { images } from '../../../assets/images';
import { Colors } from '../../../utils/colors';

interface PaginationProps {
    onPreviousPageChange: () => void;
    onNextPageChange: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPreviousPageChange, onNextPageChange }) => {
    const [page, setPage] = useState<number>(1);
    const totalPages = 5;

    // Use useCallback to memoize handlers and avoid unnecessary re-renders
    const handlePreviousPage = useCallback(() => {
        setPage(prevPage => {
            const newPage = Math.max(prevPage - 1, 1);
            if (newPage !== prevPage) {
                onPreviousPageChange();
            }
            return newPage;
        });
    }, [onPreviousPageChange]);

    const handleNextPage = useCallback(() => {
        setPage(prevPage => {
            const newPage = Math.min(prevPage + 1, totalPages);
            if (newPage !== prevPage) {
                onNextPageChange();
            }
            return newPage;
        });
    }, [onNextPageChange]);

    return (
        <View style={styles.paginationContainer}>
            <TouchableOpacity
                disabled={page === 1}
                style={page === 1 ? styles.paginationBtnDisabled : styles.paginationBtn}
                onPress={handlePreviousPage}>
                <FastImage
                    source={images.arrow}
                    style={styles.leftArrow}
                    tintColor={Colors.white}
                />
            </TouchableOpacity>
            <Text style={styles.pageNumber}>{page}</Text>
            <TouchableOpacity
                disabled={page === totalPages}
                style={page === totalPages ? styles.paginationBtnDisabled : styles.paginationBtn}
                onPress={handleNextPage}>
                <FastImage
                    source={images.arrow}
                    style={styles.rightArrow}
                    tintColor={Colors.white}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Pagination;
