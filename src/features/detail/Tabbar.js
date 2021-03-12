import React, { Component } from 'react';
import $axios from "../../utils/request"
import { Toast } from 'antd-mobile';
import history from "../../common/history"
import { Badge } from 'antd-mobile';
export default class Tabbar extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props)
    this.state = {
      cartNum: localStorage.getItem('cartNum')
    }
    this.addCart = this.addCart.bind(this)
  }

  componentDidMount() {
    // let num = localStorage.getItem('cartNum')
    // this.setState({
    //   cartNum: num
    // })
  }

  render() {
    let { cartNum } = this.state
    return (
      <nav className="tabbar">
        <div className="tabbar-left">
          <a href="" className="tabbar-item">
            <i data-num="" className="iconfont">&#xe646;</i>
            <p>客服</p>
          </a>
          <a className="tabbar-item" onClick={() => { history.push('/cart') }}>
            <Badge text={cartNum} style={{ position: 'absolute', right: '-20px' }}>
              <i data-num="" className="iconfont">&#xe62d;</i>
              <p>购物车</p>
            </Badge>
          </a>
        </div>
        <div className="tabbar-right">
          <a id="addCart" className="tabbar-item tabbar-item-block" onClick={this.addCart}>加入购物车</a>
          <a id="soonBuy" className="tabbar-item tabbar-item-block tabbar-item-orange">立即购买</a>
        </div>
      </nav>
    );
  }

  addCart() {

    let cartNum = localStorage.getItem('cartNum')

    cartNum++

    let { form } = this.props
    let url = "/api/cart/addCart"
    let data = form
    $axios.post(url, data).then(res => {
      Toast.success('添加成功', 1);
      localStorage.setItem('cartNum', cartNum)
      this.setState({
        cartNum
      })
    })
  }
}
