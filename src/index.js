import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router'

require("./scss/normalize.css")
require("./scss/base.css")

//import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import App from './app.js'
import User from './Component/User'
import Page1 from './container/page1'
import Page2 from './container/page2'

//TODO replace bashHistory with browserHistory
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<Route path="user" component={User}/>
        	<Route path="page1" component={Page1}/>
        	<Route path="page2" component={Page2}/>
        </Route>
    </Router>
), document.getElementById('app'));

/*<Route path="red-envelop" component={RedEnvelop}/>*/
/*<Route path="red-envelop" component={RedEnvelop}/>
 <Route path="stars" component={Stars}/>
 <Route path="welfare" component={Warefare}/>
 */