import React, {Component} from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'
import "./scss/base.scss"
/*import RedEnvelop from "./component/RedEnvelop"
import Stars from "./component/Stars"
import Warefare from "./component/Warefare"*/


//var banner = require("./image/banner.jpg")
//require( "./scss/base.scss")

export default class app extends Component {

    render() {

        return <div>
            
            <ul className="navs">
                <li><a className="navbtn" href="#redEnvelope">抢百万红包</a></li>
                <li><a className="navbtn" href="#star">逛明星单品</a></li>
                <li><a className="navbtn" href="#warefare">赢下单福利</a></li>
            </ul>
            <div>
                {this.props.children}
            </div>
        </div>
    }
}

/*<img src={banner} style={{width: "100%"}}/>
 * <ul className="navs">
 <li><Link className="navbtn" to={{pathname:'/red-envelop'}}>抢百万红包</Link></li>
 <li><Link className="navbtn" to={{pathname:'/stars'}}>逛明星单品</Link></li>
 <li><Link className="navbtn" to={{pathname:'/welfare'}}>赢下单福利</Link></li>
 </ul>
 */