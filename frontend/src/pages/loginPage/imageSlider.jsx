import React from "react";
import { Carousel } from "react-bootstrap";
import style from "./loginPage.module.css";

function ImageSlider(){

    return <Carousel className={style.movingComponent} controls={false}>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="https://pinchofyum.com/wp-content/uploads/Smoky-Red-Lentil-Stew-2.jpg"
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
        src="https://pinchofyum.com/wp-content/uploads/Three-Cheese-Gnocchi-3.jpg"
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
        src="https://pinchofyum.com/wp-content/uploads/Crockpot-Lentil-Soup-3.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="https://pinchofyum.com/wp-content/uploads/Tofu-Burgers-1-2.jpg"
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
