import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";

const Main = props =>(
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Series}/>
        <Route path="/series/:id" component ={SingleSeries}/>
    </Switch>
 </BrowserRouter>
);

export default Main;