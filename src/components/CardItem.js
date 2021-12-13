/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

function CardItem(props) {
  const { path, label, src, text } = props;

  return (
    <>
      <li className="cards__item">
        <Link to={path} className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img src={src} alt="Travel Image" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
