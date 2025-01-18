import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="flex flex-col justify-center min-h-screen gap-5 max-container w-full"
    >
      <h1 className="text-4xl font-bold font-palanquin">
        Our <span className="text-coral-red inline-block">Popular</span>{" "}
        Products
      </h1>

      <p className="mt-2 text-slate-gray font-montserrat lg:max-w-lg">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product, index) => (
          <PopularProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
