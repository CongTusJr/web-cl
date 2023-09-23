
import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import { LeftOutlined, RightOutlined  } from '@ant-design/icons'

function App() {

  const settings = {
   // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Sử dụng component CustomPrevArrow làm nút trước
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    return (
      <div className="custom-prev-arrow" onClick={props.onClick} style={{
        position: 'absolute',
        left: '30px',
        top: '50%', // Để căn giữa theo chiều dọc
        transform: 'translateY(-50%)', // Để căn giữa theo chiều dọc
        display: 'flex',
        zIndex: 100
      }}>
        <LeftOutlined  style={{ fontSize: '12px', color: 'black' }} />
      </div>
    );
  }

  function CustomNextArrow(props) {
    return (
      <div className="custom-prev-arrow" onClick={props.onClick} style={{
        position: 'absolute',
        right: '30px',
        top: '20%', // Để căn giữa theo chiều dọc
        display: 'flex',
        zIndex: 100
      }}>
        <RightOutlined  style={{ fontSize: '12px', color: 'black' }} />

      </div>
    );
  }



  return (
    <div className="App">
      <div style={{height: '18.4px', backgroundColor:'white', fontFamily:'initial', padding:'8px 0px'}}>
        <div>
        <Slider {...settings}>
          <div>
            <div>Khuyến mãi khủng giảm tới  <strong> 35% </strong>  tất cả sản phẩm</div>
          </div>
          <div>
            <div>SALE hot chào lương về - Freeship đơn 0đ</div>
          </div>
          <div>
            <div>Miễn phí vận chuyển với đơn hàng trên  <b> 500k </b>  	</div>
          </div>
        </Slider>
        </div>
      </div>


    </div>
  );
}

export default App;