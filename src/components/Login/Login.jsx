import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authUser } from '../../store/actions';

import { authEndpoint, clientId, redirectUri } from '../../utils/config';
import hash from '../../utils/getHash';

import { InnerContainer } from '../style/container/Container';
import Button from '../style/button/Button';

const Login = () => {
    const userToken = useSelector((state) => state.userToken);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authUser(hash));
    }, [dispatch]);

    return (
        <InnerContainer>
            {userToken ? (
                <Redirect to="/" />
            ) : (
                <Button
                    isLink
                    href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}>
                    Logar
                </Button>
            )}
        </InnerContainer>
    );
};

export default Login;
