import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import { authUser as authUserAction } from '../../store/actions';

import { authEndpoint, clientId, redirectUri } from '../../utils/config';
import hash from '../../utils/getHash';

import { InnerContainer } from '../style/container/Container';
import Button from '../style/button/Button';

const Login = ({ userToken, authUser }) => {
    useEffect(() => {
        authUser(hash);
    }, [userToken, authUser]);

    return (
        <InnerContainer>
            {userToken ? (
                <Redirect to="/" />
            ) : (
                <>
                    <Button
                        isLink
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}>
                        Logar
                    </Button>
                </>
            )}
        </InnerContainer>
    );
};

Login.propTypes = {
    userToken: PropTypes.string,
    authUser: PropTypes.func,
};

Login.defaultProps = {
    userToken: '',
    authUser: () => {},
};

const mapStateToProps = ({ spotify }) => {
    return {
        userToken: spotify.userToken,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authUser: (userToken) => {
            dispatch(authUserAction(userToken));
        },
    };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
