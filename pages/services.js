import React from "react";
import Pricing from "../components/pricing";
import SectionTitle from "../components/sectionTitle";
import { useState } from "react";
import servicesData from "../components/serviceData";
import Workshops from "../components/workshops";
import FadeInSection from "../components/fadeInSection";

function Services() {
  console.log("serv data", servicesData);
  const [expanded, setExpanded] = useState(false);
  const [focus, setFocus] = useState(0);
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
            <FadeInSection>
              {" "}
              <div>
                <a
                  href={`#${item.id}`}
                  id={`struct-${item.id}`}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-300 md:h-auto md:w-100 md:rounded-none md:rounded-l-lg"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                    {item.desc.length < 100 && (
                      <div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    )}
                    {item.desc.length >= 100 && (
                      <div>
                        {expanded && focus === item.id && (
                          <div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                              {item.desc}
                            </p>
                            <button
                              onClick={(event) => {
                                setExpanded(false);
                                setFocus(0);
                                event.preventDefault();
                                document
                                  .getElementById(`struct-${item.id}`)
                                  .scrollIntoView();
                              }}
                              className="flex justify-end align-middle text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                              Read Less...
                            </button>
                          </div>
                        )}
                        {focus !== item.id && (
                          <div>
                            <div>{item.desc.substring(0, 200)}... </div>
                            <button
                              onClick={(event) => {
                                setExpanded(true);
                                setFocus(item.id);
                                event.preventDefault();
                                document
                                  .getElementById(`struct-${item.id}`)
                                  .scrollIntoView();
                              }}
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-4"
                            >
                              Read More...
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </a>
              </div>
            </FadeInSection>
          </div>
        ))}
      <FadeInSection>
        <Workshops />
      </FadeInSection>
      <FadeInSection>
        <Pricing />
      </FadeInSection>
    </div>
  );
}

export default Services;
