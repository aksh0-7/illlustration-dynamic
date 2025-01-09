import React from "react";
import "./Grid.css";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import seven from "../assets/7.jpg";

const Grid = () => {
  return (
    <div className="grid">
      <div className="grid-item1">
        <img src={one} alt="" />
      </div>
      <div className="grid-item2">
        <img src={two} alt="" />
      </div>
      <div className="grid-item3"> 
        <img src={three} alt="" />
      </div>
      <div className="grid-item4">
        <h3>Types of Illustrations</h3>
        <p>Illustrations can vary widely in style and medium. Common types include hand-drawn sketches, digital graphics, vector art, and photorealistic images. Each type is suited for specific purposes, such as whimsical art for children's books or detailed diagrams for technical manuals.</p>
      </div>
      <div className="grid-item5">
          <img src={four} alt="" />
      </div>
      <div className="grid-item6">
        <h3>Digital Advancements</h3>
        <p>With the advent of digital tools, creating illustrations has become more accessible. Software like Adobe Illustrator, Procreate, and Figma enables designers to craft intricate visuals efficiently, making illustrations a vital part of modern design.</p>
      </div>
      <div className="grid-item7">
        <img src={five} alt="" />
      </div>
      <div className="grid-item8">
          <img src={six} alt="" />
      </div>
      <div className="grid-item9">
        <img src={seven} alt="" />
      </div>
    </div>
  );
};

export default Grid;
