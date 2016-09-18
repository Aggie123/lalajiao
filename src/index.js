import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router'

require("./scss/normalize.scss")
require("./scss/base.scss")


import App from './app.js'

//TODO replace bashHistory with browserHistory
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
), document.getElementById('app'));

/*<Route path="red-envelop" component={RedEnvelop}/>*/
/*<Route path="red-envelop" component={RedEnvelop}/>
 <Route path="stars" component={Stars}/>
 <Route path="welfare" component={Warefare}/>
 */