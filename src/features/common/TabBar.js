import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import smile from '../../images/footer/smile.svg'
import smileing from '../../images/footer/smileing.svg'
import cart from '../../images/footer/cart.svg'
import carting from '../../images/footer/carting.svg'
import classz from '../../images/footer/class.svg'
import classing from '../../images/footer/classing.svg'
import index from '../../images/footer/index.svg'
import indexing from '../../images/footer/indexing.svg'
import history from '../../common/history'

export default class Footer extends Component {
  static propTypes = {

  };

 constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
    this.goToPage=this.goToPage.bind(this)
  }

  renderContent(pageText) {
    
  }

  goToPage(url){
    
  }

  render() {
    let {active}=this.props
    let cartNum=localStorage.getItem('cartNum')
    return (
      <div style={{ position: 'fixed', width: '100%', bottom: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#FF734C"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={{ uri: index }}
            selectedIcon={{ uri: indexing }}
            selected={active === 'index'}
            onPress={() => {
              history.push('/index')
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: classz }}
            selectedIcon={{ uri: classing }}
            title="分类"
            key="Koubei"
            selected={active === 'koubei'}
            onPress={() => {
              history.push('/koubei')
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: cart }}
            selectedIcon={{ uri: carting }}
            badge={cartNum}
            title="购物车"
            key="Friend"
            selected={active === 'cart'}
            onPress={() => {
              history.push('/cart')
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: smile }}
            selectedIcon={{ uri: smileing }}
            title="我的"
            key="my"
            selected={active === 'my'}
            onPress={() => {
              history.push('/my')
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
