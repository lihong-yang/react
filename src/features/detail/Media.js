import React, { Component } from 'react';

export default class Media extends Component {
  static propTypes = {

  };

  render() {
    let info = this.props.info || {}

    return (
      <div>
        <div className="media">
          <div className="media-left">
            <i className="iconfont">&#xe6c8;</i>
          </div>
          <div className="media-center">
            <font className="fontsize-16">APP下单立减
              <i>5</i>元
            </font>
          </div>
          <div className="media-right">
            <i className="iconfont">&#xe74c;</i>
          </div>
        </div>
        <div className="kong"></div>
        <section className="detailsinfo">
          <div className="detailsinfo-item">
            <div className="detailsinfo-item-title">花语</div>
            <div className="detailsinfo-item-desc">
              {info.flowerLanguage}
            </div>
          </div>
          <div className="detailsinfo-item">
            <div className="detailsinfo-item-title">材料</div>
            <div className="detailsinfo-item-desc">
              {info.material}
            </div>
          </div>
          <div data-toggle="true" className="detailsinfo-item hidden">
            <div className="detailsinfo-item-title">配送</div>
            <div className="detailsinfo-item-desc">
              限送100多个主要城市的市区及近郊：北京，上海，深圳，广州,成都,武汉,南京,杭州,苏州,天津,西安,长沙,东莞,厦门,佛山,沈阳,合肥,重庆,大连,郑州,青岛,太原,无锡,石家庄,济南,宁波,哈尔滨,乌鲁木齐,贵阳,昆明,福州,长春,南昌,兰州,珠海,南宁,中山,常州,金华,邯郸,泉州,海口,嘉兴,南通,呼和浩特,廊坊,唐山,温州,徐州,绵阳,烟台,襄阳,保定,潍坊,镇江,衡阳,包头,赣州,扬州,清远,荆州,莆田,汉中,洛阳,湛江,九江,鞍山,大庆,秦皇岛,张家口,桂林,吉林,淄博,蚌埠,柳州,遵义,邢台,宜春,漳州,三亚,宜宾,东营,临沂,德州,开封,大同,龙岩,齐齐哈尔,连云港,新乡,黄冈,焦作,十堰,驻马店,信阳,牡丹江,黄石,宝鸡,丹东,阜阳,北海,聊城,锦州,许昌,内江,萍乡,安庆,承德,商丘,盘锦,乐山,沧州,河源,营口,平顶山,临汾,韶关,日照,新余,晋城,松原,淮北,淮南,晋中,潮州,滨州,自贡,六安,株州,濮阳,常熟,晋江,顺德,江阴,吴江,昆山,义乌,惠阳,银川,温江,燕郊,新都,涿州,南沙,宜兴,即墨,海安县,都江堰,增城,仙桃,菏泽
            </div>
            <div className="detailsinfo-item-right">
              <i className="iconfont">&#xe68f;</i>
            </div>
          </div>
        </section>
        <div className="kong"></div>
        <section className="skuselect">
          <div className="media">
            <div className="media-left">已选</div>
            <div className="media-center">{info.name}</div>
            <div className="media-right">
              <i className="iconfont">&#xe68f;</i>
            </div>
          </div>
          <div className="media">
            <div className="media-left">
              配送至
            </div>
            <div className="media-center">
              <p><i className="iconfont">&#xe662;</i>&nbsp;
                <span>请选择配送地区</span>
              </p>
              <p className="media-desc"></p>
            </div>
            <div className="media-right">
              <i className="iconfont">&#xe68f;</i>
            </div>
          </div>
        </section>
        <div className="di"></div>
      </div>
    );
  }
}
