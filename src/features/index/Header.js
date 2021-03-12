import React, { Component } from 'react';
import Listpng from "../../images/list.png";
import logo from "../../images/m_hualogo.png"
export default class Header extends Component {
  static propTypes = {

  };

  render() {
    return (
      <header className=" index-header flex jc-sb fcc">
        <img src={Listpng} className="ml-10"  alt=""/>
        {/* <span>花礼网</span> */}
        <img src={logo} width="150" height="20" alt=""/>
        {/* <span className="mr-10">登录</span> */}
        <i className="iconfont mr-10 f26">&#xe646;</i>
      </header>
    );
  }
}
