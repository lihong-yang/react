import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { NavBar } from 'antd-mobile';
import history from "../../common/history"
import $axios from "../../utils/request"

export class DefaultPage extends Component {
  static propTypes = {
    setting: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="setting-default-page">
        <NavBar
          mode="light"
          icon={<i className="iconfont">&#xe74a;</i>}
          onLeftClick={() => { history.goBack() }}
          rightContent={
            <i className="iconfont">&#xe61d;</i>
          }
        >设置</NavBar>

        <div className="main">
          <ul className="setup-list">
            <li>
              <span className="item-left">个人资料</span>
              <div className="item-right">
                <i className="iconfont">&#xe74c;</i>
              </div>
            </li>
            <li>
              <span className="item-left">绑定帐号</span>
              <div className="item-right">
                <span>手机/微信等</span>
                <i className="iconfont">&#xe74c;</i>
              </div>
            </li>
            <li>
              <span className="item-left">修改密码</span>
              <div className="item-right">
                <i className="iconfont">&#xe74c;</i>
              </div>
            </li>
            <li>
              <span className="item-left">反馈建议</span>
              <div className="item-right">
                <i className="iconfont">&#xe74c;</i>
              </div>
            </li>
          </ul>

          <div className="signout">
            <button onClick={this.logout}>退出</button>
          </div>
        </div>
      </div>
    );
  }

  logout() {
    let url = "/api/user/logout"
    $axios.post(url).then(res => {
      console.log(res)
      localStorage.setItem('token', "")
      localStorage.setItem('username', "")
      localStorage.setItem('isLogin', false)
      history.push('/login')
    })
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    setting: state.setting,
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
