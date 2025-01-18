import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex max-lg:flex-col max-container gap-8 justify-between align-center">
      <div className="flex-1">
        <img
          src={offer}
          alt="shoe promotion"
          className="object-contain w-full"
        />
      </div>

      <div className="flex-1">
        <h1 className="capitalize text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> offer
        </h1>
        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="info-text mt-4">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex gap-5 mt-8">
          <Button label={"Shop Now"} iconURL={arrowRight} />
          <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-white rounded-full text-slate-gray border-slate-gray">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
