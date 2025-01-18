import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex flex-row items-center max-lg:flex-col justify-between max-container gap-10 w-full"
    >
      <div className="flex flex-col gap-5 flex-1 ">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div>
          <Button label={"View details"} />
        </div>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src={shoe8}
          alt="super quality shoes"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
