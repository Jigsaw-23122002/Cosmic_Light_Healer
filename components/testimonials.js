import Image from "next/image";
import React from "react";
import Container from "./container";
import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 grid-cols-2 ">
        <div className="col-span-2">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Dear Soni,
              <br></br>I wanted to take a moment to express my gratitude for the
              impact you have had on my life. I was lost in a sea of negative
              thoughts and feelings but through your guidance and wisdom, I have
              found a path towards inner peace, soul awakening, and
              enlightenment.
              <br></br>
              <br></br>
              Your teachings on mindfulness and meditation have helped me to
              quiet my mind and connect with my true self. I now have a newfound
              appreciation for life and the world around me. The clarity and
              understanding I have gained have not only improved my
              relationships but have also given me the courage to pursue my
              passions and live life to the fullest.
              <br></br>
              <br></br>I cannot thank you enough for the gift of inner peace and
              soul awakening that you have shared with me. My ability to focus
              and establish a connection with my authentic self has improved. I
              am forever grateful for the role you have played in my journey
              towards enlightenment.
            </p>

            <Avatar name="Arun Banotra" title="USA" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Dear Vinu,
              <br></br>I am so blessed. I am on the shore of the Divine Love of
              a Tradition that does not judge me, but accepts me as I am, I am
              part of this vast ocean of Love and I have the free will to choose
              whether I prefer to stay on the shore of infinite possibilities or
              to dive in fully, with full presence and knowing that all is well,
              exactly as it is.
              <br></br>I have taken my first step and I am already feeling the
              energy awakening within me. But the greatest thing is that I have
              found a Yogi Master.
              <br></br>
              <br></br>I am honoured to be his student and that this feeling
              brings tears of gratitude to my eyes.
              <br></br>
              <br></br>
              Thank you for being my window, dear Vinu.
            </p>

            <Avatar name=" Pelka Evdenic Kuzelka" title="Awakening Times" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Soni has made my life Calm and taught the meaning of real bliss in
              life. She is very kind and a pure hearted being. She gives
              attention to details and give her presence from her heart and her
              actively listening skills with compassion and love really helps me
              in understanding my situation better. Her techniques at cosmic
              light healer platform guides to reflecting back on my actions. My
              decision making and my way to respond to certain situations in
              various circumstances has been changed by her presence as a
              spiritual coach in my life.
              <br></br>
              <br></br>
              Her presence around even from miles apart makes me feel I have a
              my own person I can always rely on in any situation and any time
              without any judgement. She has capability to make to feel light
              and smile even if you have a very heavy heart or going through
              tough times. Her techniques such as zen mindfulness and mind body
              soul alignment are life changing. For me she is a gem, a friend
              and a guide who is selfless and so kind hearted. I am so blessed
              to have her as my coach in my life.
            </p>

            <Avatar name="Sakshi Sareen" title="Australia" />
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
