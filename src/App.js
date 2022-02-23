import React, { useEffect, useState } from 'react';
import './App.css';
import { Carousel } from 'antd';
import Card from './component/card/card'
import { getImg } from './http/http';

const contentStyle = {
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


function App() {
  const [imgList,setImgList] = useState([]);
  const lazyload = false;
  const worker = new Worker('http://localhost:3000/static/js/worker.js');
  worker.postMessage('hello son');
  worker.onmessage = (res) => {
    console.log('res',res);
  }
  useEffect(() => {
    getImg().then((res) => {
      console.log(res);
      setImgList(res.data)
    });
  },[])
  return (
    <div className="App">
      <div className='mainsection'>
        <div className='carousel'>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
          </Carousel>
        </div>
        <div className='maincard'>
          {
            imgList.map(i => (
              <Card url={i.download_url} lazyload={lazyload}></Card>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
