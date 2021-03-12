import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import reactLogo from '../../images/react-logo.svg';
import rekitLogo from '../../images/rekit-logo.svg';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-default-page">
        <header className="app-header tac">
          <img src={reactLogo} className="app-logo" alt="logo" />
          <img src={rekitLogo} className="rekit-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <div className="app-intro">
          <h3 className="mt-20 tac">开始编码:</h3>
          <ul>
            <li className="flex item pl-15">
              <span className="mr-10">查看示例</span>
              <Link to="/examples">http://localhost:6076/examples</Link>
            </li>
            <li className="flex item pl-15">
              <span className="mr-10">打开IDE</span>
              <a href="http://localhost:6076/" target="_blank" rel="noopener noreferrer">
                http://localhost:6076/
              </a>
            </li>
            <li className="flex item pl-15">
              <span className="mr-10">打开首页</span>
              <a href="http://localhost:6075/index" target="_blank" rel="noopener noreferrer">
                http://localhost:6075/index
              </a>
            </li>
            <li className="flex item pl-15">
              <span className="mr-10">打开登录页面</span>
              <a href="http://localhost:6075/Login" target="_blank" rel="noopener noreferrer">
                http://localhost:6075/Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
