import React from "react";

function Home() {
  return (
    <section className="home-container">
      <h1 className="home-title">
        Hi I'm, <strong>Thanos Koltsidas</strong>
      </h1>
      <div className="underline"></div>
      <p className="home-text">
        I recently got my Physics Bsc and now I'm looking for a dev team to join
        so I can learn and grow. If you are interested I'll be happy to hear
        from you.
      </p>
      <button className="cv-btn">
        <a href={require("../images/cv.pdf")} target="_blank">
          Get my CV
        </a>
      </button>
    </section>
  );
}

export default Home;
