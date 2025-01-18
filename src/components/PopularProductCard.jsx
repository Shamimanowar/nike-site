import { star } from "../assets/icons";

const PopularProductCard = ({ product }) => {
  return (
    <div>
      <div className="flex-col gap-16 flex-1 shrink-1">
        <img
          src={product.imgURL}
          alt={product.name}
          width={282}
          height={282}
          className=""
        />
        <div className="flex flex-row mt-4 text-slate-gray gap-2.5">
          <img
            src={star}
            alt="review icon"
            height={24}
            width={24}
            className="object-contain text-coral-red"
          />
          <p className="text-xl font-montserrat">(4.5)</p>
        </div>

        <h3 className="text-2xl font-semibold font-palanquin mt-4">
          {product.name}
        </h3>
        <p className="text-2xl leading-normal font-semibold font-montserrat text-coral-red mt-4">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
