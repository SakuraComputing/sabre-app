import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import YodelDashboardPage from '../src/components/YodelDashboard';
import RedeliveryDashboard from '../src/components/RedeliveryDashboard';
import ParcelHistory from '../src/components/ParcelHistory';
import Header from '../src/components/Header';
import AddRedelivery from "../src/components/AddRedelivery";
import EditRedelivery from '../src/components/EditRedelivery';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={YodelDashboardPage} exact={true}/>
                <Route path="/tracking" component={ParcelHistory}/>
                <Route path="/redelivery" component={RedeliveryDashboard} exact={true}/>
                <Route path="/redelivery/:id" component={EditRedelivery} />
                <Route path="/create" component={AddRedelivery}> </Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;