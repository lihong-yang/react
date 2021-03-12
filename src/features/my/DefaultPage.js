import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import TabBar from "../common/TabBar"
import { Link } from "react-router-dom"
import $axios from "../../utils/request"

export class DefaultPage extends Component {
  static propTypes = {
    my: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props)
    this.state = {

    }
    this.cartNum = this.cartNum.bind(this)
  }

  componentDidMount() {
    this.cartNum()
  }

  cartNum() {
    let url = "/api/cart/getList"

    $axios.get(url).then(res => {
      let num = res.carts.length
      localStorage.setItem('cartNum', num)
    })
  }

  render() {
    // let { isLogin, userName } = this.props;
    let isLogin = localStorage.getItem('isLogin')
    let userName = localStorage.getItem('username')
    return (
      <div className="my-default-page">
        <div className='header'>
          <i className="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
          <span>个人中心</span>
          <span></span>
        </div>

        <div className="bg">
          {
            
           isLogin==="true" ? <div className="center">
                <div className="head">
                  <img src="//img02.hua.com/pc/assets/img/avatar_default_07.jpg" alt="" />
                </div>
                <div className="tefent">
                  <p className="haoma">{userName}</p>
                  <p className="tubiao"><i className="iconfont font-a">&#xe669;</i> 注册会员</p>
                </div>
              </div> : <div className="log out ">
                <p>Hi,欢迎来到花札网</p>
                <button className="bt">
                  <Link to={'/login'}>
                    登录/注册
                  </Link>
                </button>
              </div>

          }
        </div>

        <div className="orderForm">
          <div className="order-top">
            <div>
              <span>我的订单</span>
              <a>全部订单<i className="iconfont">&#xe74c;</i></a>
            </div>
          </div>
          <div className="order-bottom">
            <ul>
              <li>
                <p className="img"></p>
                <p>待付款</p>
              </li>
              <li>
                <p className="img"></p>
                <p>今日配送</p>
              </li>
              <li>
                <p className="img"></p>
                <p>待评价</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="panel">
          <div className="panel-top">
            <ul>
              <li>
                <i className="iconfont">&#xe625;</i>
                <p>优惠券</p>
              </li>
              <li>
                <i className="iconfont">&#xe61e;</i>
                <p>权益卡</p>
              </li>
              <li>
                <i className="iconfont">&#xe69e;</i>
                <p>余额</p>
              </li>
              <li>
                <i className="iconfont">&#xe669;</i>
                <p>会员积分</p>
              </li>
            </ul>
          </div>
          <div className="panel-bottom">
            <ul>
              <li>
                <i className="iconfont">&#xe610;</i>
                <p>收货地址</p>
              </li>
              <li>
                <i className="iconfont">&#xe603;</i>
                <p>生日纪念提醒</p>
              </li>
              <li>
                <i className="iconfont">&#xe635;</i>
                <p>我的收藏</p>
              </li>
              <li>
                <i className="iconfont">&#xe8ad;</i>
                <p>浏览记录</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <ul>
            <li>
              <i className="iconfont">&#xe646;</i>
              <p>联系客服</p>
            </li>
            <li>
              <i className="iconfont">&#xe7d6;</i>
              <p>帮助中心</p>
            </li>
            <li>
              <i className="iconfont">&#xe601;</i>
              <p>关于花札</p>
            </li>
            <li>
              <Link to="/setting">
                <i className="iconfont">&#xe64f;</i>
                <p>设置</p>
              </Link>
            </li>
          </ul>
        </div>

        <TabBar active="my"></TabBar>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    my: state.my,
    isLogin: state.login.isLogin,
    userName: state.login.userName
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
