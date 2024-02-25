import React, { useState } from "react";

const Projects = ({ projects }) => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (rowIndex, projectIndex) => {
    const index = rowIndex * 3 + projectIndex;
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Function to group projects into rows of three
  const createRows = () => {
    const rows = [];
    for (let i = 0; i < projects.length; i += 3) {
      rows.push(projects.slice(i, i + 3));
    }
    return rows;
  };

  // Generate rows of projects
  const rows = createRows();

  return (
    <div className="w-screen py-5 mt-20 h-screen overflow-y-auto scrollbar-hide">
      <div id="modals">
        {projects.map((project, index) => (
          <div
            id={`modal-${index}`}
            key={`modal-${index}`}
            className={`${
              activeModal === index ? "" : "hidden"
            } fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50`}
          >
            <div className="relative p-4">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div
                  className="p-4 md:p-5 space-y-4 overflow-auto"
                  style={{ maxHeight: "60vh" }}
                >
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center sm:w-lg">
                    {project.images.map((image, imgIndex) => {
                      const imageStyle = {
                        maxWidth: "100%",
                        width: "auto",
                        height: "300px",
                        maxHeight: "300px", // Increase the maximum height
                        objectFit: "cover",
                      };

                      // Check aspect ratio to determine portrait or landscape
                      const aspectRatio = image.width / image.height;
                      if (aspectRatio > 1) {
                        // Landscape
                        imageStyle.height = "auto";
                      } else if (aspectRatio < 1) {
                        // Portrait
                        imageStyle.width = "auto";
                      }

                      return (
                        <img
                          key={imgIndex}
                          src={image}
                          alt={`${project.title}-${imgIndex}`}
                          className="rounded-lg m-2"
                          style={imageStyle}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render project rows */}
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center flex-wrap ">
          {row.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="w-80 bg-white border border-gray-200 rounded-lg shadow p-3 m-3 flex flex-col justify-between"
              style={{ height: "210px", width: "340px" }} // Set fixed height and width
            >
              <div className="flex justify-center items-center flex-col">
                <img
                  className="rounded-lg w-auto h-auto object-cover"
                  src={project.typeImage}
                  alt={project.title}
                  style={{ maxHeight: "100px", maxWidth: "100%" }}
                />
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}{" "}
                  <span className=" text-opacity-55 text-xs justify-end text-gray-500">
                    {" "}
                    {project.type}
                  </span>
                </h5>
              </div>
              <button
                type="button"
                className="block text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => openModal(rowIndex, projectIndex)}
              >
                Show More Information
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;
