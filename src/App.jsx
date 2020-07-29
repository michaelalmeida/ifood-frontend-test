import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import 'antd/dist/antd.css';
import GlobalStyles from './components/style/globalStyle';
import { Container } from './components/style/container/Container';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';

function App() {
    const userToken = useSelector(({ spotify }) => spotify.userToken);
    const isAuth = !!userToken;

    return (
        <Container background>
            <GlobalStyles />
            <Header isAuth={isAuth} />
            <Router>
                <Switch>
                    <Route exact path="/login/" component={Login} />
                    <Route exact path="/">
                        {userToken ? <HomePage /> : <Redirect to="/login/" />}
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
