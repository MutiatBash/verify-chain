import company1 from "../assets/images/company1.svg"
import company2 from "../assets/images/company2.svg"
import company3 from "../assets/images/company3.svg"
import company4 from "../assets/images/company4.svg"
import company5 from "../assets/images/company5.svg"

export const Companies = () => {
  return (
    <section className="lg:px-16 py-10">
        <p className="text-center">Join 500+ companies already growing</p>
      <div className="flex flex-row justify-between items-center py-6 lg:py-10 px-4 lg:px-20">
        <img src={company1} />
        <img src={company2} />
        <img src={company3} />
        <img src={company4} />
        <img src={company5} />
      </div>
    </section>
  );
};
