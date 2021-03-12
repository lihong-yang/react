import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile'
import history from "../../common/history"

export default class Heard extends Component {
  static propTypes = {

  };

  render() {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" color="#000" onClick={()=>{history.goBack()}}/>}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <i className="iconfont am-icons" key="1">&#xe61d;</i>
        ]}
    >
      <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt="hua.com,logo" className="headerbar-logo"/>
    </NavBar>
    );
  }
}
