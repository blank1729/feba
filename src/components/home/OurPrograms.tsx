import { Accordion } from "../common/Accordion";

const programs = [
  {
    name: "Aradhana",
    day: "Sunday",
    timings: ["0700AM", "0700PM"],
    lang: "",
    img: "",
  },
  { name: "Time of Prayer", day: "Sunday", timings: ["0700AM", "0700PM"] },
  { name: "Aradhana Samaya", day: "Sunday", timings: ["0700AM", "0700PM"] },
  { name: "Roopanthara", day: "Sunday", timings: ["0700AM", "0700PM"] },
  { name: "Samadhana Samayam", day: "Sunday", timings: ["0700AM", "0700PM"] },
];

const OurPrograms = () => {
  return (
    <section className="section py-20">
      <div className="w-full grid items-center">
        <h3 className="text-4xl lg:text-6xl font-semibold mb-8 lg:mb-16">
          Our Programs
        </h3>
        {/* list of accordions that shows only 5 at first and shows more on clicking the more button */}
        <div className="w-full my-4">
          {programs.map((program, index) => (
            <Accordion key={index} program={program} />
          ))}
        </div>
        <button className="border-2 border-black w-24 mx-auto px-4 mt-10 py-2 text-xl rounded-md">
          More
        </button>
      </div>
    </section>
  );
};

export default OurPrograms;
