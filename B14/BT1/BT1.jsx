import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminPage from './AdminPage';
import ProductDetail from './ProductDetail';
import HomePage from './HomePage';
export default function BT1() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/product/:productId">
                        <ProductDetail />
                    </Route>
                    <Route path="/admin">
                        <AdminPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
