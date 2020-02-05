import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './storepicker';
import App from './app';
import notFound from './notfound';




const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={StorePicker} />
            <Route exact path='/store/:storeId' component={App} />
            <Route component={notFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;