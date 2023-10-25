import { Button } from "../components/Button";

const Purple = ({ heading, body, buttontext }) => {
  return (
    <section className="lg:px-24 lg:py-14">
      <div className="flex flex-col gap-6 lg:gap-8 items-center justify-center text-center bg-[#F9F5ff] rounded-2xl p-8 lg:py-20 lg:px-12">
        <h3 className="text-3xl  font-semibold">{heading}</h3>
        <p className="lg:w-[50%] text-[#7f56d9]">{body}</p>
        <div className="flex flex-row gap-3">
          <Button
            text={"Learn more"}
            className="bg-white border text-black hover:text-[#7f56d9] hover:shadow hover:bg-white"
          />
          <Button text={"Get started"} />
        </div>
      </div>
    </section>
  );
};

export default Purple;
