import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import Bill from './components/Bill'
import Create from './components/Content/Create'
import Select from './components/Content/Select'

const Index = () => (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/bill" component={Bill} />
        <Route path="/create" component={Create} />
        <Route path="/select" component={Select} />
    </BrowserRouter>
);

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
