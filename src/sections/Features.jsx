import { features } from "../utils/data";

const Features = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="flex flex-col gap-6 lg:gap-8 items-center justify-center text-center">
        <p className="text-[#7f56d9] font-bold">Features</p>
        <h3 className="text-4xl  font-semibold lg:w-[60%]">
          All set of security and verification features to ensure trust and
          security in the web3 universe.
        </h3>
        <p className="lg:w-[60%]">
          Robust set of tools and features for validating contract identities and security
        </p>
      </div>
      <div className="grid py-10 lg:py-14 bg-[#] md:grid-cols-2 md:gap-12 gap-8 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14 text-center px-4 md:px-10 lg:px-20 ">
        {features.map((feature) => (
          <div className="flex flex-col gap-3 items-center text-center ">
            <img src={feature.src} />
            <h3 className="font-semibold text-2xl md:text-xl lg:text-2xl">
              {feature.title}
            </h3>
            <p className="mb-2">{feature.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
