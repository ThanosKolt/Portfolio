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
      <div className="-projects-content">
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
            <div className="project-skills-container">
              <p className="project-skill">View code on Github</p>
              <p className="project-skill">Try the App</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
