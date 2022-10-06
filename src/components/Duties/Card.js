import React from "react";
import "./Cards.css";
import CardItem1 from "./CardItem1";

function Card() {
  return (
    <div className="cards">
      <h1>Duties of a Campus Ambassador</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem1
              src="https://image.shutterstock.com/image-vector/icon-represent-brand-ambassadors-used-260nw-1725733132.jpg"
              text="Represent and exemplify Kashiyatra in your college among your peers."
              label="Represent"
              path="/services"
            />
            <CardItem1
              src="https://www.pngitem.com/pimgs/m/77-776456_promote-icon-png-transparent-png.png"
              text="Promote Kashiyatra by publicizing its events through social media platforms."
              label="Publicize"
              path="/services"
            />
            <CardItem1
              src="https://image.shutterstock.com/z/stock-vector-light-bulb-in-an-icon-conceptualizing-creative-idea-1134198626.jpg"
              text="Bring forth ideas and proposals as valuable input for team Kashiyatra."
              label="Conceptualize"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem1
              src="https://ky-2020.netlify.app/img/20190825_202100.png"
              text="Conduct workshops and promotional events in your college for Kashiyatra."
              label="Organize"
              path="/products"
            />
            <CardItem1
              src="https://thumbs.dreamstime.com/b/gear-tool-idea-icon-logo-design-element-can-be-used-as-as-complement-to-95683049.jpg"
              text="Conduct workshops and promotional events in your college for Kashiyatra."
              label="Organize"
              path="/products"
            />
            <CardItem1
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/07/Logo_inspiration_jpg_McepkS6d.jpg?auto=format&q=60&w=1280&h=960&fit=crop&crop=faces"
              text="Conduct workshops and promotional events in your college for Kashiyatra."
              label="Organize"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
