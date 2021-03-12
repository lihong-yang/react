/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import hualogo from '../../images/m_hualogo.png';
import { Icon } from 'antd-mobile';
import $axios from "../../utils/request"
import { Toast } from 'antd-mobile';
import history from "../../common/history"
// import "../../styles/iconfont/iconfont.css"
export class DefaultPage extends Component {
  static propTypes = {
    login: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      zc: false,
      flag: false,
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.clearTel = this.clearTel.bind(this)
    this.clearText = this.clearText.bind(this)
  }
  render() {
    let { username, password, zc, flag } = this.state
    return (
      <div className="login-default-page">
        {/* 顶部标题 */}
        <div className="header-bar">
          <div className="header-bar-left">
            {
              zc
                ?
                <i
                  className="iconfont"
                  style={{ fontSize: "20px" }}
                  onClick={() => { this.setState({ zc: false }) }}
                >&#xe74a;</i>
                :
                <i className="iconfont" onClick={() => { history.goBack() }}>&#xe609;</i>
            }
          </div>
        </div>
        {/* 中间内容 */}
        <div className="container">

          {/* 图片login */}
          <div className="hualogo">
            {
              zc ? "手机号注册" : <img src={hualogo} />
            }
          </div>
          {/* 手机号码 */}
          <div className="formgroup">
            <div className="formgroup-input">
              <input placeholder="请输入手机号" type="tel" maxLength="11" name="username" value={username} onChange={this.changeValue} />
            </div>
            <div className={`formgroup-input-icon ${username ? '' : 'dsn'}`} onClick={this.clearTel}>
              <Icon type="cross-circle-o" size="xxs"></Icon>
            </div>
          </div>
          {/* 验证码 */}
          {/* <div className="formgroup">
            <div className="formgroup-input">
              <input placeholder="请输入短信验证码" type="text"  />
              <div className={`formgroup-input-icon ${password ? '' : 'dsn'}`}>
                <Icon type="cross-circle-o" size="xxs"></Icon>
              </div>
            </div>
            <div className="formgroup-btn">
              获取验证码
            </div>
          </div> */}

          {/* 密码 */}
          <div className="formgroup">
            <div className="formgroup-input">
              <input placeholder="请输入密码" type={flag ? "" : "password"} name="password" value={password} onChange={this.changeValue} />
            </div>
            <div className="formgroup-input-icon" onClick={() => { this.setState({ flag: !flag }) }}>
              {
                flag ? <i className="iconfont">&#xe630;</i> : <i className="iconfont">&#xe64e;</i>
              }
            </div>
          </div>


          {/* 按钮 */}
          <div className="form-contrl" onClick={this.onSubmit}>
            <button className="formbtn">{zc ? "注册" : "手机登陆 / 注册"}</button>
          </div>

          {
            zc ?
              <div className="flex" style={{ marginTop: "34px" }}>
                <div className="flex-item center">
                  邮箱注册<Icon type="right" />
                </div>
              </div>
              :
              <div className="flex">
                <div className="flex-item">
                  账号密码登录<Icon type="right" />
                </div>
                <div className="flex-item rigth" onClick={() => { this.setState({ zc: true }) }}>
                  注册<Icon type="right" />
                </div>
              </div>
          }
        </div>
        {/* 其它登录方式 */}

        {
          zc ? "" :
            <div className="thirdparty-login">
              <div className="thirdparty-login-item">
                <i className="iconfont">&#xe623;</i>
                <span>QQ</span>
              </div>
              <div className="thirdparty-login-item bef">
                <i className="iconfont">&#xe60f;</i>
                <span>支付宝</span>
              </div>
            </div>
        }

      </div>
    );
  }

  onSubmit() {
    let isLogin = "/login"

    let { username, password, zc } = this.state

    if (zc) {
      isLogin = '/register'
    } else {
      isLogin = '/login'
    }

    let url = "/api/user" + isLogin
    let data = {
      username,
      password
    }
    $axios.post(url, data).then(res => {
      console.log(res)
      if (zc) {
        debugger
        Toast.success('注册成功', 1);
        this.setState({
          zc: false
        })
      } else {
        this.props.actions.updataLogin(true);
        this.props.actions.updataUser(res.user.username);
        localStorage.setItem("token", res.user.token);
        localStorage.setItem("username", res.user.username);
        localStorage.setItem("isLogin", true);
        Toast.success('登陆成功', 1);
        history.goBack()
      }

    }).catch(err => {
      console.log(err)
    })
  }



  changeValue(event) {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }


  clearTel(event) {
    this.setState({
      username: ""
    })
  }

  clearText(event) {
    this.setState({
      password: ""
    })
  }

}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    login: state.login,
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
