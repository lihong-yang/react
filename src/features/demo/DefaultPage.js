import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import $http from '@/utils/request';

export class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.getList();
  }

  async getList() {
    let url = '/flower/getList';
    let res = await $http.get(url);
    console.log(res);
    this.setState({
      list: res.flowers
    });
  }

  static propTypes = {
    demo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    let { list } = this.state;
    return (
      <div className="demo-default-page">
        <ul>
          {list.map((item,index) => {
            console.log(item);
            return <li key={index}>{item.flowerId},{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    demo: state.demo,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultPage);
