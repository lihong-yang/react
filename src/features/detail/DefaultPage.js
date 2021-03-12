import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Heard from './Heard'
import Probanner from './Probanner'
import Proinfo from './Proinfo'
import Media from './Media'
import Tabbar from './Tabbar'
import $axios from "../../utils/request"

export class DefaultPage extends Component {
  static propTypes = {
    detail: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      detail: {}
    }
  }

  componentDidMount() {
    let flowerId = this.props.location.state.Id
    this.getDetail(flowerId)
  }

  getDetail(flowerId) {
    let url = '/api/flower/getDetail'
    let data = {
      flowerId
    }
    $axios.get(url, data).then(res => {
      this.setState({
        detail: res.flower
      })
    })
  }

  render() {
    let {detail}=this.state
    return (
      <div className="detail-default-page">
        <Heard></Heard>
        <Probanner list={detail.imgs}></Probanner>
        <Proinfo info={detail}></Proinfo>
        <Media info={detail}></Media>
        <Tabbar form={detail}></Tabbar>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    detail: state.detail,
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
