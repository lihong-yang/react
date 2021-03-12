import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import $axios from '@/utils/request';
import Banner from "./Banner"
import Header from "./Header"
import Item from "./Item"
import TabBar from "../common/TabBar"

export class DefaultPage extends Component {
  static propTypes = {
    index: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.getList = this.getList.bind(this)
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    let url = "/api/flower/getList"
    $axios.get(url).then(res => {
      console.log(res)
      this.setState({
        list: res.flowers
      })
    },err=>{
      console.log(err)
    })
  }

  render() {
    let { list } = this.state
    return (
      <div className="index-default-page">
        <Header></Header>
        <Banner></Banner>
        <ul className="list">
          {
            list.map(item => {
              return <Item key={item.flowerId} form={item}></Item>
            })
          }
        </ul>

        <TabBar active="index"></TabBar>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    index: state.index,
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
