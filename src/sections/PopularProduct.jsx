import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section>
      <div className="">
        <h1 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red inline-block">Popular</span>{" "}
          Products
        </h1>

        <p className="mt-2 text-slate-gray font-montserrat lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>

        <div className="mt-10 flex lex-row gap-10 flex-1 flex-wrap">
          {products.map((product, index) => (
            <PopularProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
