var React = require("react");
var router = require("react-router");

var Route = router.Route;
var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = route.IndexRoute;

var Main = require("../components/Main");
var Saved = require("../components/Saved");
var Search = require("../components/Search");
var Results = require("../components/Results");

module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="search" component={Search}/>
            <Route path="saved" component={Saved}/>
            <Route path="results" component={Results}/>
            
            <IndexRoute component={Search}/>
        </Route>
    </Router>
);