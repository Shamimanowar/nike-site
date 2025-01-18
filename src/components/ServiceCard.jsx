import React from "react";

const ServiceCard = ({ imgURL, label, subHeading }) => {
  return (
    <div className="flex-1 shadow-3xl sm:w-[350px] sm:min-w-[350px] rounded-[20px] px-10 py-16 w-full">
      <div className="bg-coral-red flex rounded-full w-11 h-11 justify-center align-center">
        <img
          src={imgURL}
          alt="service image"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <h2 className="text-3xl leading-normal font-semibold mt-5">{label}</h2>

      <p className="info-text mt-2">{subHeading}</p>
    </div>
  );
};

export default ServiceCard;
