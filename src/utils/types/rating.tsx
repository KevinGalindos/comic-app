import { Dispatch, SetStateAction } from "react";

export type RatingType = {
  setRating: Dispatch<SetStateAction<number>>;
};
