import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyles from './components/style/globalStyle';
import { Container } from './components/style/container/Container';

import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';

function App({ userToken }) {
    return (
        <Container>
            <GlobalStyles />
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
