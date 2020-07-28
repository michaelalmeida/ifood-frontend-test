import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authUser } from '../../store/actions';

import { authEndpoint, clientId, redirectUri } from '../../utils/config';
import hash from '../../utils/getHash';

import { InnerContainer } from '../style/container/Container';
import Button from '../style/button/Button';
import SelectInput from '../style/input/SelectInput';
import NumberInput from '../style/input/NumberInput';
import DateTimeInput from '../style/input/DateTimeInput';

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
                <>
                    <Button
                        isLink
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}>
                        Logar
                    </Button>
                    <DateTimeInput />
                    <NumberInput
                        id="limit"
                        name="Quantidade"
                        validation={{ primitiveType: 'INTEGER', min: 1, max: 50 }}
                    />
                    <SelectInput
                        id="country"
                        name="País"
                        values={[
                            {
                                value: 'AU',
                                name: 'Australia',
                            },
                            {
                                value: 'DE',
                                name: 'Alemanhã',
                            },
                            {
                                value: 'BR',
                                name: 'Brasil',
                            },
                            {
                                value: 'PT',
                                name: 'Portugal',
                            },
                            {
                                value: 'en_US',
                                name: 'EUA',
                            },
                            {
                                value: 'RU',
                                name: 'Rússia',
                            },
                        ]}
                    />
                </>
            )}
        </InnerContainer>
    );
};

export default Login;
