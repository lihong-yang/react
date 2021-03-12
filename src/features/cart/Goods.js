import React, { Component } from 'react';
import $axios from "../../utils/request"
import history from "../../common/history"

export default class Goods extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props)
    this.state = {
      totalMoney: 0,
      carts: []
    }
    this.getList = this.getList.bind(this)

    this.changeStatus = this.changeStatus.bind(this)
    this.handlerValue = this.handlerValue.bind(this)
    this.countPrice = this.countPrice.bind(this)
    this.cutNum = this.cutNum.bind(this)
    this.addNum = this.addNum.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.getOrderList = this.getOrderList.bind(this)
    this.delGoods = this.delGoods.bind(this)
  }

  componentDidMount() {
    this.getList()
    this.getOrderList()
  }

  getList() {
    let url = "/api/cart/getList"
    $axios.get(url).then(res => {
      console.log(res)

      res.carts.forEach(item => {
        item.radio = false
      })

      this.setState({
        carts: res.carts
      })
    }).catch(err => {
      console.log(err)
    })
  }

  changeStatus(index) {

    let { carts } = this.state
    carts[index].radio = !carts[index].radio

    this.setState({
      carts
    })
    this.countPrice()
  }

  countPrice() {
    let { carts } = this.state
    let sum = 0
    carts.forEach(item => {
      if (item.radio) {
        sum += item.buyNum * item.price
      }
    })

    this.setState({
      totalMoney: sum
    })
  }


  handlerValue(index, e) {

    let { carts } = this.state

    let value = e.target.value

    if (value < 0) {
      value = 1
    }

    carts[index].buyNum = Math.ceil(value) || ""
    this.setState({
      carts
    })

    this.countPrice()
  }

  cutNum(index) {
    let { carts } = this.state
    if (carts[index].buyNum !== 1) {
      carts[index].buyNum--
      this.setState({
        carts
      })
    }
    this.countPrice()
  }

  addNum(index) {

    let { carts } = this.state
    carts[index].buyNum++
    this.setState({
      carts
    })
    this.countPrice()
  }

  delGoods(cartId, index) {
    let { carts } = this.state

    carts.splice(index, 1)
    let url = "/api/cart/delById"
    let data = {
      cartId
    }
    $axios.post(url, data).then(res => {
      localStorage.setItem('cartNum', carts.length)
      this.setState({
        carts
      })
    })
  }


  render() {
    let { carts, totalMoney } = this.state

    return (
      <div className="cart-goods">
        <ul className="promo-list">

          {
            carts.map((item, index) => {
              return <li className="list-item" key={item.cartId}>
                <div className="item-checkbox" onClick={() => { this.changeStatus(index) }}>
                  {
                    item.radio ? <i className="iconfont" style={{ color: "#FF734C" }}>&#xe60c;</i> : <i className="iconfont">&#xe618;</i>
                  }

                </div>

                <div className="item-dec">
                  <div className="pic">
                    <img src={item.imgUrl} alt="" />
                  </div>

                  <div className="info">
                    <p className="title">[鲜花]{item.name}</p>
                    <div className="num">
                      <span>数量</span>
                      <div className="setnum">
                        <span className="cut" onClick={() => { this.cutNum(index) }}>
                          {item.buyNum <= 1 ? <i className="iconfont" onClick={() => { this.delGoods(item.cartId, index) }}>&#xed44;</i> : <i className="iconfont">&#xe66b;</i>}
                        </span>
                        <input className="count" value={item.buyNum} maxLength="3" onChange={(e) => { this.handlerValue(index, e) }}></input>
                        <span className="add" onClick={() => { this.addNum(index) }}>
                          <i className="iconfont">&#xe658;</i>
                        </span>
                      </div>
                    </div>
                    <p className="price">
                      <span>￥{item.price}</span>
                    </p>
                  </div>
                </div>
              </li>
            })
          }


        </ul>

        <footer className="footer">
          <div className="footer-left">
            合计:<span className="total">￥{totalMoney}</span>
          </div>
          <button className="footer-right" onClick={this.onSubmit}>去结算</button>
        </footer>
      </div>
    );
  }


  onSubmit() {
    let { carts } = this.state

    let arr = carts.filter(item => {
      return item.radio
    })
    let url = "/api/order/createOrder"

    let data ={arr}
    $axios.post(url, data).then(res => {
      history.push({ pathname: '/order', state: { orderId: res.orderId } })
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }


  getOrderList() {
    let url = "/api/order/getList"
    $axios.get(url).then(res => {
      console.log(res)
    })
  }
}
