import React, { useEffect } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ROUTE_HOME, ROUTE_LOGIN } from '../../navigation/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { StackNavigationProp } from '@react-navigation/stack';

const SplashScreen: React.FunctionComponent = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    //To get store email and password
    const { email, password } = useSelector((state: RootState) => state.login);

    useEffect(() => {
        //If Email and Password are available then directly redirect to Home screen.
        const targetRoute = email && password ? ROUTE_HOME : ROUTE_LOGIN;
        const navigate = () => {
            // It cleare stack and replace current stack with target stack
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

export default SplashScreen;
