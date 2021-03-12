import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import $axios from "../../utils/request"

export default class Banner extends Component {
  static propTypes = {

  };

  constructor(props){
     super(props)
     this.state={
       imgHeight: 176,
       list:[]
     }
     this.getList=this.getList.bind(this)
  }

  componentDidMount() {
    
    this.getList()
  }

  getList(){
    let url="/api/flower/getBanner"
    $axios.get(url).then(res=>{
      this.setState({
        list:res.banners
      })
    })
  }


  render() {
    
    return (
      <div className="index-banner">
       <WingBlank>
        <Carousel
         style={{margin:0}}
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.list.map((val,index) => (
              <img
                src={val.imgUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                key={val.bannerId}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
          ))}
        </Carousel>
      </WingBlank>
      </div>
    );
  }
}
