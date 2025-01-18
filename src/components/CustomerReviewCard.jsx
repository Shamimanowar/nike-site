import React from "react";
import { star } from "../assets/icons";

const CustomerReviewCard = ({ imgURL, name, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center w-full lg:max-w-lg">
      <div className="w-[120px] h-[120px] ">
        <img
          src={imgURL}
          alt="customer photo"
          className="object-cover rounded-full"
        />
      </div>

      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>

      <div className="flex flex-row gap-2.5 mt-3 justify-center">
        <img
          src={star}
          alt="rating icon"
          width={24}
          height={24}
          className="object-contain text-coral-red"
        />
        <p className="info-text">({rating})</p>
      </div>

      <h2 className="text-3xl font-bold font-palanquin"> {name}</h2>
    </div>
  );
};

export default CustomerReviewCard;
