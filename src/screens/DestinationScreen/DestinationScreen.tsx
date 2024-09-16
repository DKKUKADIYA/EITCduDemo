import React, { useEffect } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ROUTE_HOME, ROUTE_LOGIN } from '../../navigation/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { StackNavigationProp } from '@react-navigation/stack';

const DestinationScreen: React.FunctionComponent = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const { email, password } = useSelector((state: RootState) => state.login);

    useEffect(() => {
        const targetRoute = email && password ? ROUTE_HOME : ROUTE_LOGIN;
        const navigate = () => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: targetRoute }],
                }),
            );
        };
        navigate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};

export default DestinationScreen;
