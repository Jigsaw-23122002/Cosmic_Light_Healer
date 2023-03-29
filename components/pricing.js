import React from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline.";
import Img1 from "../public/img/Free.png";
import Img2 from "../public/img/Standard.png";
import Img3 from "../public/img/Premium.png";
import SectionTitle from "./sectionTitle";

function Pricing() {
  return (
    <div>
      <SectionTitle
        pretitle="Pricing and Packages"
        title="Some of packages we are providing"
      >
        Experience the ultimate convenience and value with our carefully curated
        package of premium services tailored to meet your every need.
      </SectionTitle>
      <div className="flex flex-col xl:flex-row lg:flex-row justify-center p-10">
        <div class="flex flex-col items-center lg:w-1/3 xl:w-1/3 max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 m-5">
          <a href="#">
            <Image class="rounded-t-lg" src={Img1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Empowerment Coaching sessions + Personalized Techniques online.
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              1. Discovery Call (free) - Try it out and see if it is right for
              you. Discover session is 40 minutes long.
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              2. Coaching session - $250 90 minutes long
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              3. 6-week packages - $1200 6 sessions 90 minutes long
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              4. 8-week package - $1500 8 sessions
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              5. 12-week package - $2300 12 coaching sessions
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center lg:w-1/3 xl:w-1/3 max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 m-5">
          <a href="#">
            <Image class="rounded-t-lg" src={Img1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pancha Bhuta Kriya (Yoga + Breathwork + Visualization +
                Meditation + healing) – Chakra cleansing and connection to five
                element – (Only 21 seats available) (Group session online)
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              (For the first 11 participants it would be $900)
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              (This is an exclusive program and contains secret processes and
              techniques)
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              1 Month Program - $ 1100 US dollars Total 8 sessions, 2 sessions a
              week, 90 minutes sessions
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center lg:w-1/3 xl:w-1/3 max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 m-5">
          <a href="#">
            <Image class="rounded-t-lg" src={Img1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                The Flowing Meditation Online (Martial art techniques + Thai Chi
                + Breathwork + Visualization)
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              1. 1 week package - $250 sessions 60 minutes long
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              2. 6-week packages - $1200 12 sessions 60 minutes
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              3. 8-week package - $1500 16 sessions 60 minutes
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              4. 12-week package - 2300 24 sessions 60 minutes
            </p>
          </div>
        </div>
      </div>
      <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400 p-10">
        For further enquiry please contact cosmiclighthealer@gmail.com
      </p>
    </div>
  );
}

export default Pricing;
