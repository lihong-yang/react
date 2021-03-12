import React, { Component } from 'react';
import history from "../../common/history"
export default class Header extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="cart-header flex">
        <div className="head-left" onClick={()=>{history.goBack()}}>
          <i className="iconfont">&#xe74a;</i>
        </div>
        <div className="head-center">
          购物车
        </div>
        <div className="head-right">
          <i className="iconfont">&#xe61d;</i>
        </div>
      </div>
    );
  }
}
