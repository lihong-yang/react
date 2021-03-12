import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import $axios from "../../utils/request"
import history from "../../common/history"

export class DefaultPage extends Component {
  static propTypes = {
    order: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      user: '阿飞',
      address: '中国广东深圳市',
      date: '2020年1月1日',
      orders: [],
      totalMoney: 0
    }
    this.getDatil = this.getDatil.bind(this)
  }

  componentDidMount() {
    this.getDatil()
  }

  getDatil() {
    let { orderId } = this.props.location.state
    console.log(orderId)
    let url = "/api/order/getDetail"
    let data = {
      orderId
    }

    $axios.get(url, data).then(res => {
      console.log(res)
      let list = res.result[0].arr
      let sum = 0
      list.forEach(item => {
        sum += item.buyNum * item.price
      });
      this.setState({
        orders: list,
        totalMoney: sum
      })
    })
  }


  render() {
    let { user, address, date, orders,totalMoney } = this.state
    return (
      <div className="order-default-page">
        <div className="nav">
          <i className='iconfont' onClick={() => { history.goBack() }}>&#xe74a;</i>
          <p className="nav-title">提交订单</p>
        </div>

        <div className="info flex jc-sb">
          <div className="person">
            {user}
          </div>
          <div className="address">
            <i className="iconfont">&#xe610;</i>
            <span>{address}</span>
          </div>
          <div className="detail">
            <i className="iconfont">&#xe74c;</i>
          </div>
        </div>
        <div className="borderbd"></div>

        <ul className="option">
          <li className="flex jc-sb">
            <div>订购人信息</div>
            <p>{user}</p>
            <i className="iconfont">&#xe74c;</i>
          </li>
          <li className="flex jc-sb">
            <div>送达日期</div>
            <p>{date}</p>
            <i className="iconfont">&#xe74c;</i>
          </li>
          <li className="flex jc-sb">
            <div>贺卡留言</div>
            <input placeholder="填写即赠精美贺卡" />
            <i className="iconfont">&#xe74c;</i>
          </li>
        </ul>

        <div className="remark flex jc-sb">
          <p>备注/优惠券/权益卡/发票</p>
          <i className="iconfont">&#xe74c;</i>
        </div>
        {
          orders.map(item => {
            return <div className="goodsInfo flex jc-sb" key={item.cartId}>
              <img alt="" src={item.imgUrl} width="64" />
              <div>
                <p>[鲜花]{item.name}</p>
                <p>数量: × {item.buyNum}</p>
              </div>
              <span>￥ {item.buyNum * item.price}</span>
            </div>
          })
        }


        <div className="prices flex jc-sb">
          <div>商品总金额</div>
          <i className="iconfont">&#xe74c;</i>
        </div>



        <div className="footer flex jc-sb">
          <div className="total flex">
            <span>合计:</span>
            <p>￥{totalMoney}</p>
          </div>
          <div className="close">去结算</div>

        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    order: state.order,
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
