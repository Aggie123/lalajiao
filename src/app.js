import React from 'react'
import {
    render
} from 'react-dom'
import {
    Menu,
    Breadcrumb,
    Icon
} from 'antd';
import {
    Link
} from 'react-router'
import BrowserDemo from './Component/BrowserDemo';
import './scss/main.css'
const SubMenu = Menu.SubMenu;

const App = React.createClass({
    getInitialState() {
        return {
            collapse: true,
        };
    },
    onCollapseChange() {
        this.setState({
            collapse: !this.state.collapse,
        })
    },
    render() {
        const collapse = this.state.collapse;
        return (
            <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
            <Menu.Item key="user">
              <Icon type="user" />
              <Link className="nav-text" to={{pathname:'/user'}}>技术</Link>
            </Menu.Item>
            <Menu.Item key="setting">
              <Icon type="setting" />
              <Link className="nav-text" to={{pathname:'/page1'}}>摄影</Link>
            </Menu.Item>
            <Menu.Item key="laptop">
              <Icon type="laptop" />
              <Link className="nav-text" to={{pathname:'/page2'}}>吉他</Link>
            </Menu.Item>
            <Menu.Item key="laptop">
              <Icon type="laptop" />
              <Link className="nav-text" to={{pathname:'/todo'}}>Todo</Link>
            </Menu.Item>
          </Menu>
          <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header">Hello there!</div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 600 }}>
              {this.props.children}
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          Welcome Onboard!
          </div>
        </div>
      </div>
        );
    },
});

//ReactDOM.render(<BrowserDemo><AsideCollapse /></BrowserDemo>, mountNode);



export default App;
/*import React, {
    Component
} from 'react'
import {
    render
} from 'react-dom'
import {
    Link
} from 'react-router'
import "./scss/base.scss"


//var banner = require("./image/banner.jpg")
//require( "./scss/base.scss")

export default class app extends Component {

    render() {

        return <div>
            
            <ul className="navs">
                 <li><Link className="navbtn" to={{pathname:'/user'}}>抢百万红包</Link></li>
                 <li><Link className="navbtn" to={{pathname:'/user'}}>逛明星单品</Link></li>
                 <li><Link className="navbtn" to={{pathname:'/user'}}>赢下单福利</Link></li>
            </ul>
            <div>
                {this.props.children}
            </div>
        </div>
    }
}*/

/*<img src={banner} style={{width: "100%"}}/>
 * <ul className="navs">
 <li><Link className="navbtn" to={{pathname:'/red-envelop'}}>抢百万红包</Link></li>
 <li><Link className="navbtn" to={{pathname:'/stars'}}>逛明星单品</Link></li>
 <li><Link className="navbtn" to={{pathname:'/welfare'}}>赢下单福利</Link></li>

 <li><a className="navbtn" href="#redEnvelope">抢百万红包</a></li>
                <li><a className="navbtn" href="#star">逛明星单品</a></li>
                <li><a className="navbtn" href="#warefare">赢下单福利</a></li>
 </ul>
 */