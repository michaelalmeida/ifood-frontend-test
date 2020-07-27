import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import { authEndpoint, clientId, redirectUri } from '../../utils/config';
import hash from '../../utils/getHash';

import { InnerContainer } from '../style/container/Container';
import Button from '../style/button/Button';

const Login = ({ userToken }) => {
    return (
        <InnerContainer>
            {userToken ? (
                <Redirect to="/" />
            ) : (
                <Button
                    isLink
                    href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}
                >
                    Logar
                </Button>
            )}
        </InnerContainer>
    );
};

export default Login;
