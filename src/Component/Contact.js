import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const getWhatsAppUrl = () => {
    return "https://wa.me/+96171757484";
  };
  const getInstagramUrl = () => {
    return "https://www.instagram.com/tannouskhattar_/";
  };
  const getLinkedinUrl = () => {
    return "https://www.linkedin.com/in/tannous-khattar-a799ba281";
  };
  const getGithubUrl = () => {
    return "https://github.com/Khattarooo";
  };

  const [whatsappUrl, setWhatsAppUrl] = useState(getWhatsAppUrl());
  const [instagramUrl, setInstagramUrl] = useState(getInstagramUrl());
  const [linkedinUrl, setLinkedinUrl] = useState(getLinkedinUrl());
  const [githubUrl, setGithubUrl] = useState(getGithubUrl());

  const handleWhatsAppClick = () => {
    setWhatsAppUrl(getWhatsAppUrl());
  };
  const handleInstagramClick = () => {
    setInstagramUrl(getInstagramUrl());
  };

  const handleLinkedinUrl = () => {
    setLinkedinUrl(getLinkedinUrl());
  };

  const handleGithubUrl = () => {
    setGithubUrl(getGithubUrl());
  };

  return (
    <div cqlassName="flex justify-center items-center">
      <div className="fixed inset-0 flex flex-col mt-20 md:flex-row items-center justify-center overflow-y-auto">
        <div className="sm:max-w-md  mb-0 md:mb-0 text-center md:text-left">
          <div className="text-sky-200">
            <h2 className="text-5xl text-sky-200 font-semibold mb-2">
              Let's Work Together!
            </h2>
            <p className="mb-1">
              Feel free to reach out to me for any inquiries or feedback.
              <br />
              I'm looking forward to hearing from you!
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstagramClick}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                alt="Instagram"
                className="text-3xl mx-2"
              />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                alt="WhatsApp"
                className="text-3xl mx-2"
              />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkedinUrl}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                alt="LinkedIn"
                className="text-3xl mx-2"
              />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGithubUrl}
            >
              <FontAwesomeIcon
                icon={faGithub}
                alt="Github"
                className="text-3xl mx-2"
              />
            </a>
          </div>
        </div>
        <div className="sm:max-w-xl mr-4">
          <form className="bg-transparent w-full shadow-md rounded px-1 pt-2 pb-20">
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-sky-500"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-sky-500 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-sky-500"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-sky-500"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-sky-500"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="bg-gray-200 appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
