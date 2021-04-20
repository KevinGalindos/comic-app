import { FunctionComponent, useState } from "react";

import { Footer } from "./../Footer";
import { Rating } from "./../Rating";

import { ComicType } from "./../../utils/types/comic";

import "./Content.scss";

export const Content: FunctionComponent<ComicType> = ({ data }) => {
  const [rating, setRating] = useState(0);
  console.log(data);
  return (
    <div className="mainContent">
      <div className="mainContent__body">
        <h1 className="mainContent__body__title">
          {data.title} - {data.year}
        </h1>
        <img
          className="mainContent__body__image"
          alt={data.alt}
          src={data.img}
        />
      </div>
      <Rating setRating={setRating} />
      <p className="score">
        {rating === 0 ? "Sin Calificar" : `Su calificación fue de: ${rating}`}
      </p>
      <Footer />
    </div>
  );
};
