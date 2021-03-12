/* eslint-disable radix */
import React, { Component } from 'react';

export default class Proinfo extends Component {
  static propTypes = {

  };

  render() {

    let info = this.props.info || {}
    return (
      <section className="proinfo">
        <div className="proinfo-head">
          <div className="proinfo-head-title">
            {info.name}
            <span className="text-orange">{info.ad}</span>
          </div>
          <div className="proinfo-head-collect">
            <a className="navigation">
              <i className="iconfont">&#xe635;</i>
            </a>
          </div>
        </div>
        <div className="proinfo-body">
          <div className="proinfo-body-price">
            <span className="proinfo-body-price-sjg">¥{info.price}</span>
            <s className="proinfo-body-price-jg">¥{info.originPrice}</s>
          </div>
          <div className="proinfo-body-sales">已售
            <span>{parseInt(info.saleNum / 10000) || 0}</span>
            件
          </div>
        </div>
      </section>
    );
  }
}
