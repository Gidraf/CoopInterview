import React, { Component, useState } from "react";
import elephant from "./assets/elephant.svg"
import show from "./assets/show.svg"
import menu from "./assets/menu.svg"
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./slider.css"

const SimpleSlider = ()=>{
  

    const [value, setValue] = useState(0);

    const onChange = value => {
    setValue(value);
    }



    return (
        <>
        <Carousel className="item">
          <div className="item-h">
            <img src={elephant} style={{float:"left", width:"47px", height:"40px"}}/>
            <img src={menu} style={{float:"right", width:"30px", height:"30px", }}/>
            <div style={{float:"left", marginLeft:".5rem",}}>
                <h4 className="item-text">01105-Jumbo Junior Access A/c</h4>
                <p className="item-text">Samuel Njuguna Mbugua</p>
                <h4 className="item-text">01112345678901</h4>
            </div>
            <button className="item-btn">
                <img src={show} style={{width:"1rem", marginRight:".5rem"}}/>
                <span className="item-text">Show Balance</span>
            </button>
          </div>
          <div className="item-h">
            <img src={elephant} style={{float:"left", width:"47px", height:"40px"}}/>
            <img src={menu} style={{float:"right", width:"30px", height:"30px", }}/>
            <div style={{float:"left", marginLeft:".5rem",}}>
                <h4 className="item-text">01105-Jumbo Junior Access A/c</h4>
                <p className="item-text">Samuel Njuguna Mbugua</p>
                <h4 className="item-text">01112345678901</h4>
            </div>
            <button className="item-btn">
                <img src={show} style={{width:"1rem", marginRight:".5rem"}}/>
                <span className="item-text">Show Balance</span>
            </button>
          </div>
         
        </Carousel>
        <Dots
        value={value}
        onChange={onChange}
        thumbnails={[
          (<div key={1} style={{backgroundColor:"#7AC143", width:"8px", height:"8px", borderRadius:"10px"}} ></div>),
          (<div key={12} style={{backgroundColor:"#FFFFFF", width:"8px", height:"8px", borderRadius:"10px"}}></div>),
        ]}
      />
        </>
    );
  }

export default SimpleSlider 