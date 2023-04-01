import React from "react";
import SectionTitle from "./sectionTitle";
function Workshops() {
  return (
    <div>
      <SectionTitle
        pretitle="Workshops"
        title="Attend the workshops, Feel the change!"
      >
        Workshop is an event one attends in order to work on developing specific
        skills. Empowerment and life coaching workshops bring transformations to
        help connect to the source within and to tap into the innate abilities
        to shape the life as the person wants
      </SectionTitle>
      <div className="flex flex-row justify-evenly">
        <div className=" xl:w-1/3 lg:w-1/3 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-10 justify-center self-center">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://manhattanmentalhealthcounseling.com/wp-content/uploads/2019/06/Top-5-Scientific-Findings-on-MeditationMindfulness.jpeg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bhaav Retreat{" "}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Bhaav - Dimensions of life “Happiness is your choice no fate”
              .This Retreat is for the alignment of mind body and soul. The true
              nature of souls is happiness “satchitananda”. Once we connect with
              that true nature the happiness slowly flows to other dimension of
              our being called mind. Once the mind is filled the happiness
              slowly reflects through the body and actions.{" "}
            </p>
            <a
              //   add link of workshop of th gform here
              href="https://forms.gle/KNqSvfcCNRbt7Rgx7"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register Now !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Workshops;
