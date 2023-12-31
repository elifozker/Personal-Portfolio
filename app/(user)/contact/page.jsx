"use client";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Contact() {
  const [submissionMessage, setSubmissionMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6587231d-d297-46ff-bc2a-68706087d3df");

    const object = Object.fromEntries(formData);
    console.log(object);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setSubmissionMessage("Your message has been sent successfully!"); // Set the success message
      event.target.reset(); // Reset the form after successful submission
    } else {
      setSubmissionMessage("Oops! Something went wrong. Please try again later."); // Set the error message
    }
  }

  return (
    <>
      <div id="contact" className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl  text-center text-gray-900">
            Contact With Me
          </h2>
          <p  className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Want to send feedback about my website? Or did something come to
            your mind?<br/> Let me know.
          </p>
          <div  className="space-y-8">
            <form onSubmit={handleSubmit}>
              <div className="sm:col-span-2 mt-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="sm:col-span-2 mt-2">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let me know how I can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2 mt-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                />
              </div>
              <button id={styles.gradient}
                type="submit"
                className="py-3 px-5 mt-10 text-sm font-medium text-center text-black rounded-lg sm:w-fit  focus:ring-4 focus:outline-none dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
              >
                Send message
              </button>
            </form>
            {submissionMessage && (
              <p className="text-center text-green-600 dark:text-green-400">
                {submissionMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
