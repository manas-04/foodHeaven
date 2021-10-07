import React, { Component } from "react";

import Slider from "react-slick";
import recipes from "./SliderData";
import RecipeCard from "./recipeCard";
import styles from "./slider.module.css";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
    <section className={styles.sweetSection} style={{position:"relative"}}>
        <h2 style={{paddingLeft:"8%",paddingTop:"3%"}}>
            Handpicked Recipe just for You
        </h2>
        <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>
        <Slider ref={c => (this.slider = c)} {...settings} className={styles.slider}>
            {recipes.map((recipe)=>{
                return <RecipeCard 
                    key={recipe.title}
                    title={recipe.title}
                    description={recipe.description}
                    imageUrl={recipe.imageUrl}
                    url={recipe.websiteUrl}
                    time={recipe.totalTime}
                    serving={recipe.servings}
                  />
            })}
        </Slider>
        <div>
            <button className="button" onClick={this.next} style={{position:"absolute",top:"60%",right:"0.4%",backgroundColor:"transparent",cursor:"pointer",border:"1px",outline:"white",opacity:"0.8"}}>
                <img src="./images/arrow_forward.svg" alt="Arrow Forward" style={{height:'60px'}}/> 
            </button>
            <button className="button" onClick={this.previous}  style={{position:"absolute",top:"60%",left:"-1%",backgroundColor:"transparent",cursor:"pointer",border:"1px",outline:"white",opacity:"0.8"}}>
                <img src="./images/arrow_forward.svg" alt="Arrow Forward" style={{height:'60px',transform: "rotate(180deg)"}}/> 
            </button>
        </div>
    </section>
    );
  }
}

