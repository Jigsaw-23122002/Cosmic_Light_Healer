import React from "react";
import { useState } from "react";
import FadeInSection from "../components/fadeInSection";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <FadeInSection>
        <section className="m-5">
          <div className="py-14 px-14 mx-auto max-w-screen-md bg-gray-300 rounded-2xl dark:bg-trueGray-800">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Don't hesitate to reach out! We're always happy to hear from our
              customers. Use the form below to send us a message.
            </p>
            <form
              action="https://getform.io/f/7787f740-3b00-4b25-9347-12196a005f35"
              method="POST"
              className="space-y-8"
            >
              <div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                className="px-8 py-4 w-full text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
                type="submit"
              >
                Submit Query
              </button>
            </form>
          </div>
        </section>
      </FadeInSection>
      <script
        type="text/javascript"
        src="https://form.jotform.com/jsform/230852134591454"
      ></script>
    </div>
  );
}

export default ContactUs;
