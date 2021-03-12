import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Header from "./Header"
import Goods from "./Goods"

export class DefaultPage extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  

  render() {
    return (
      <div className="cart-default-page">
        <Header></Header>
        <Goods></Goods>
      </div>
    );
  }


  
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    cart: state.cart,
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
