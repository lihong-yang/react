import React, { Component } from 'react';
import { Pagination } from 'antd-mobile';

export default class Probanner extends Component {
  static propTypes = {

  };

  render() {
    let imgs = this.props.list
    return (
      <div className="detail-probanner">
        <div className="swiper-slide">
          <img src={imgs ? imgs[0] : ""} alt="" />
        </div>
        <Pagination mode="number" total={4} current={1} />
      </div>
    );
  }
}
