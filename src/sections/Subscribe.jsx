import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex flex-row justify-between max-lg:flex-col gap-10 items-center"
    >
      <h1 className="text-4xl w-full lg:max-w-md font-bold font-palanquin leading-[68px]">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h1>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full h-17">
        <input
          type="text"
          className="input"
          placeholder="shamim.hire@gmail.com"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label={"Sign Up"} fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
