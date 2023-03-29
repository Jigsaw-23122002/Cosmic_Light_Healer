import Image from "next/image";
import React from "react";
import Container from "./container";
import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
import { useState } from "react";
export default function Testimonials() {
  const [expand1, setExpand1] = useState(false);
  const [f1, setF1] = useState(false);
  const [f2, setF2] = useState(false);
  const [f3, setF3] = useState(false);
  return (
    <Container>
      <div className="grid gap-10 grid-cols-2 ">
        <div className="col-span-2" id="test-1">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              {/* <div>{item.desc.substring(0, 200)}... </div>
                      <button
                        onClick={(event) => {
                          setExpanded(true);
                          event.preventDefault();
                        }}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-4"
                      >
                        Read More...
                      </button> */}
              Dear Soni,
              <br></br>I wanted to take a moment to express my gratitude for the
              impact you have had on my life. I was lost in a sea of negative
              thoughts and feelings but through your guidance and wisdom, I have
              found a path towards inner peace, soul awakening, and
              enlightenment.{!f1 && `......`}
              {f1 && (
                <div>
                  <br></br>
                  Your teachings on mindfulness and meditation have helped me to
                  quiet my mind and connect with my true self. I now have a
                  newfound appreciation for life and the world around me. The
                  clarity and understanding I have gained have not only improved
                  my relationships but have also given me the courage to pursue
                  my passions and live life to the fullest.
                  <br></br>
                  <br></br>I cannot thank you enough for the gift of inner peace
                  and soul awakening that you have shared with me. My ability to
                  focus and establish a connection with my authentic self has
                  improved. I am forever grateful for the role you have played
                  in my journey towards enlightenment.
                </div>
              )}
            </p>
            <div className="flex flex-row justify-between">
              <div>
                <Avatar name="Arun Banotra" title="USA" />
              </div>
              <div>
                {!f1 && (
                  <div>
                    <br />
                    <br />
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => {
                        setF1(true);
                        document.getElementById("test-1").scrollIntoView();
                      }}
                    >
                      Read More
                    </button>
                  </div>
                )}
                {f1 && (
                  <div>
                    <br />
                    <br />
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => {
                        setF1(false);
                        document.getElementById("test-1").scrollIntoView();
                      }}
                    >
                      Read Less
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2" id="test-2">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Dear Vinu,
              <br></br>I am so blessed. I am on the shore of the Divine Love of
              a Tradition that does not judge me, but accepts me as I am, I am
              part of this vast ocean of Love and I have the free will to choose
              whether I prefer to stay on the shore of infinite possibilities or
              to dive in fully, with full presence and knowing that all is well,
              exactly as it is.{!f1 && `......`}
              {f2 && (
                <div>
                  <br></br>I have taken my first step and I am already feeling
                  the energy awakening within me. But the greatest thing is that
                  I have found a Yogi Master.
                  <br></br>
                  <br></br>I am honoured to be his student and that this feeling
                  brings tears of gratitude to my eyes.
                  <br></br>
                  <br></br>
                  Thank you for being my window, dear Vinu.
                  <div className="text-blue-600 hover:underline hover:cursor-pointer">
                    <a href="http://awakeningtimes.com/about-the-mind-part-02/">
                      Link to Vinu's article on Awakening Times
                    </a>
                  </div>
                </div>
              )}
            </p>
            <div className="flex flex-row justify-between">
              <div>
                <Avatar name=" Pelka Evdenic Kuzelka" title="Awakening Times" />
              </div>
              <div>
                {!f2 && (
                  <div>
                    <br />
                    <br />
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => {
                        setF2(true);
                        document.getElementById("test-2").scrollIntoView();
                      }}
                    >
                      Read More
                    </button>
                  </div>
                )}
                {f2 && (
                  <div>
                    <br />
                    <br />
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => {
                        setF2(false);
                        document.getElementById(`test-2`).scrollIntoView();
                      }}
                    >
                      Read Less
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2" id="test-3">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Soni has made my life Calm and taught the meaning of real bliss in
              life. She is very kind and a pure hearted being. She gives
              attention to details and give her presence from her heart and her
              actively listening skills with compassion and love really helps me
              in understanding my situation better.
              {f3 &&
                `Her techniques at cosmic
              light healer platform guides to reflecting back on my actions. My
              decision making and my way to respond to certain situations in
              various circumstances has been changed by her presence as a
              spiritual coach in my life.`}
              {!f3 && `......`}
              {f3 && (
                <div>
                  <br></br>
                  <br></br>
                  Her presence around even from miles apart makes me feel I have
                  a my own person I can always rely on in any situation and any
                  time without any judgement. She has capability to make to feel
                  light and smile even if you have a very heavy heart or going
                  through tough times. Her techniques such as zen mindfulness
                  and mind body soul alignment are life changing. For me she is
                  a gem, a friend and a guide who is selfless and so kind
                  hearted. I am so blessed to have her as my coach in my life.
                </div>
              )}
            </p>
            <div className="flex flex-row justify-between">
              <div>
                <Avatar name="Sakshi Sareen" title="Australia" />
              </div>
              <div>
                {!f3 && (
                  <div>
                    <br />
                    <br />
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => {
                        setF3(true);
                        document.getElementById("test-3").scrollIntoView();
                      }}
                    >
                      Read More
                    </button>
                  </div>
                )}
                {f3 && (
                  <div>
                    <br />
                    <br />
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => {
                        setF3(false);
                        document.getElementById("test-3").scrollIntoView();
                      }}
                    >
                      Read Less
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
