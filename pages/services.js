import React from "react";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";
import SectionTitle from "../components/sectionTitle";
import { useState } from "react";
import { set } from "react-hook-form";
import servicesData from "../components/serviceData";
import Workshops from "../components/workshops";
function Services() {
  console.log("serv data", servicesData);
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <SectionTitle pretitle="Coaching" title="Here are the Services we offer!">
        What is coaching ? (what are you going to bring into your coaching) -
        Coaching is a creative process to unlock the abundant power and
        potential by accessing the eternal source within. Coaching is a flow
        happening withing the sacred space provided by the coach where the
        breakthrough happens for the souls through powerful realizations.
        Coaching is a result-oriented empowering process which involves the use
        of powerful techniques and tools to realize, release and transform.
      </SectionTitle>

      {servicesData &&
        servicesData.map((item) => (
          <div className="flex justify-center align-middle px-10 py-5 w-300">
            <div>
              <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-300 md:h-auto md:w-100 md:rounded-none md:rounded-l-lg"
                  src={item.image}
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                  {item.desc.length < 100 ? (
                    <div>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  ) : expanded ? (
                    <div>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.desc}
                      </p>
                      <button
                        onClick={(event) => {
                          setExpanded(false);
                          event.preventDefault();
                        }}
                        className="flex justify-end align-middle text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 py-2"
                      >
                        Read Less...
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div>{item.desc.substring(0, 200)}... </div>
                      <button
                        onClick={(event) => {
                          setExpanded(true);
                          event.preventDefault();
                        }}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-4"
                      >
                        Read More...
                      </button>
                    </div>
                  )}
                </div>
              </a>
            </div>
          </div>
        ))}
        {/* add this on the home page */}
      {/* <Testimonials /> */}
      <Workshops/>
      <Pricing/>
    </div>
  );
}

export default Services;
