import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container py-8">
      <h2 className="text-4xl font-palanquin font-bold text-center">
        What Our <span className="text-coral-red">Customer</span> Say?
      </h2>
      <p className="text-center info-text max-w-lg m-auto mt-4">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-16 flex justify-evenly max-lg:flex-col gap-9">
        {reviews.map((review) => (
          <CustomerReviewCard
            imgURL={review.imgURL}
            feedback={review.feedback}
            name={review.customerName}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
