import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ProductComponent from "./components/ProductComponent"
import ProductDetails from "./components/ProductDetails"
import ProductContainer from "./containers/ProductContainer"


const browserHistory = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <Route path="/" component={ProductContainer(ProductComponent)} >

                    <Route path="/product" component={ProductContainer(ProductComponent)} />
                    <Route path="/productDetails" component={ProductContainer(ProductDetails)} />
                </Route>
            </BrowserRouter>
        );
    }
}

export default App;