import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // provider
import {createStore} from 'redux';
import allReducers from './reducers';
import {BrowserRouter, Route, IndexRoute, browserHistory, Switch} from "react-router-dom";
import App from './components/app';
import Gallery from './components/gallerySection'
import Images from './components/testing'


// store
const store = createStore(allReducers);

//ReactDOM.render(<App/>, document.getElementById('root'));

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
//     , document.getElementById('root'));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={browserHistory}>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/gallery" component={Gallery} />
                <Route path="/images" component={Images}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));




