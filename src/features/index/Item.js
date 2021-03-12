/* eslint-disable radix */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Item extends Component {
  static propTypes = {

  };

  render() {
    let { form } = this.props;
    return (
      <li className="mt-10 index-item">
        <Link to={{ pathname: `/detail`, state: { Id: form.flowerId } }} className="flex">
          <p className="img-box">
            <img className="w100pc" src={form.imgUrl} alt="网络不ok" />
          </p>
          <div className="text bg-fff fg1 flex2 jc-sb">
            <div className="h88 bdb flex2 jc-c">
              <p className="f14">{form.name}</p>
              <p className="f12 lh15 mt-5">
                {form.material}
              </p>
            </div>
            <p className="h38 bdb flex aic">
              {form.ad}
            </p>
            <div className="h68 flex2 jc-c rel">
              <p>
                <span className="orange">¥{form.price}</span>
                <s className="ml-10">¥{form.originPrice}</s>
              </p>
              <p className="mt-5">已售 {parseInt(form.saleNum / 10000)}件</p>
              <i className="iconfont icon-gouwuche abs"></i>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}
