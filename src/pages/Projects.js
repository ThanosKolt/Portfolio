import React from "react";
function Projects() {
  return (
    <section className="projects-container">
      <header className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <div className="underline"></div>
        <p className="projects-sub">
          The following projects are ment to show my skills at certain
          technologies and are a great practice for me to learn more
        </p>
      </header>
      <div className="projects-content">
        <div className="single-project-container">
          <h3 className="project-title">Social Media App</h3>
          <div className="project-img-container">
            <img
              className="project-img"
              src={require("../images/MERN-BLOG.png")}
              alt="project-img"
            />
          </div>
          <div className="project-body">
            <p className="project-desc">
              A Fullstack web app build with the MERN stack. It uses React and
              Bootstrap on the Frontend and fetches data via the Axios library
              from the API. The API is build with Node and Express and it uses
              the Mongoose ORM to connect to MongoDB. User authentication and
              authorization is handled by a JWT Token and the user password gets
              hashed before stored via the bcrypt library. The app has the
              following features: Register and login with your own account, post
              (and later delete) a blog, search for other users to follow, like
              and comment on the posts you find interesting.
            </p>
            <div className="project-links-container">
              <a
                href="https://github.com/ThanosKolt/MERN-BLOG"
                target="_blank"
                className="project-link"
              >
                View code on Github
              </a>
              <a href="#" target="_blank" className="project-link">
                Try the App
              </a>
            </div>
          </div>
        </div>
        <div className="single-project-container">
          <h3 className="project-title">Weather App</h3>
          <div className="project-img-container">
            <img
              className="project-img"
              src={require("../images/WEATHER-APP.png")}
              alt="project-img"
            />
          </div>
          <div className="project-body">
            <p className="project-desc">
              This app is build with React and it uses three external APIs to
              fetch weather data via the Axios library. It uses two geoloction
              APIs to map latitude and lognitude to a particular city and one
              weather API to fetch the weather data according to the provided
              geolaction.
            </p>
            <div className="project-links-container">
              <a
                href="https://github.com/ThanosKolt/REACT-WEATHER-APP"
                target="_blank"
                className="project-link"
              >
                View code on Github
              </a>
              <a href="#" target="_blank" className="project-link">
                Try the App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
