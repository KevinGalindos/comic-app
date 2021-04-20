import { FunctionComponent } from "react";

import { RatingType } from "./../../utils/types/rating";
import "./Rating.scss";

export const Rating: FunctionComponent<RatingType> = ({ setRating }) => {
  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <div className="contentRating">
      <div className="star-source">
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="star" viewBox="0 0 26 28" stroke="#222">
            <path
              id="star-shape"
              d="M26 10.109c0 .281-.203.547-.406.75l-5.672 5.531 1.344 7.812c.016.109.016.203.016.313 0 .406-.187.781-.641.781a1.27 1.27 0 0 1-.625-.187L13 21.422l-7.016 3.687c-.203.109-.406.187-.625.187-.453 0-.656-.375-.656-.781 0-.109.016-.203.031-.313l1.344-7.812L.39 10.859c-.187-.203-.391-.469-.391-.75 0-.469.484-.656.875-.719l7.844-1.141 3.516-7.109c.141-.297.406-.641.766-.641s.625.344.766.641l3.516 7.109 7.844 1.141c.375.063.875.25.875.719z"
            />
          </symbol>
        </svg>
      </div>
      <div className="star-container">
        <input
          type="radio"
          name="star"
          id="five"
          onClick={() => handleRating(5)}
        />
        <label htmlFor="five">
          <svg className="star">
            <use xlinkHref="#star" />
          </svg>
        </label>
        <input
          type="radio"
          name="star"
          id="four"
          onClick={() => handleRating(4)}
        />
        <label htmlFor="four">
          <svg className="star">
            <use xlinkHref="#star" />
          </svg>
        </label>
        <input
          type="radio"
          name="star"
          id="three"
          onClick={() => handleRating(3)}
        />
        <label htmlFor="three">
          <svg className="star">
            <use xlinkHref="#star" />
          </svg>
        </label>
        <input
          type="radio"
          name="star"
          id="two"
          onClick={() => handleRating(2)}
        />
        <label htmlFor="two">
          <svg className="star">
            <use xlinkHref="#star" />
          </svg>
        </label>
        <input
          type="radio"
          name="star"
          id="one"
          onClick={() => handleRating(1)}
        />
        <label htmlFor="one">
          <svg className="star">
            <use xlinkHref="#star" />
          </svg>
        </label>
      </div>
    </div>
  );
};
