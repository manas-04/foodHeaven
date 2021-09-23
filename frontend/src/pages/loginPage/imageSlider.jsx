import React from "react";
import { Carousel } from "react-bootstrap";
import style from "./loginPage.module.css";

function ImageSlider(){
    return <Carousel className={style.movingComponent} controls={false}>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/1838607/pexels-photo-1838607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="https://st.depositphotos.com/1761693/4692/i/950/depositphotos_46927675-stock-photo-italian-food-pizza-with-salami.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX17942677.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>;
}

export default ImageSlider;
