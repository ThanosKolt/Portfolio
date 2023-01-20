import React from "react";

function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h2 className="about-title">About me</h2>
          <div className="underline"></div>
          <p className="about-sub">
            Here you will find more information about me, what i do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="about-desc-container">
          <h3 className="about-desc-title">Get to know me!</h3>
          <p className="about-desc-text">
            Hi! My name is Thanos and I'm 24 years old. Since I was a kid I
            always had a passion for learning new technologies. I was sitting
            infront of my computer for hours learning photo editing, video
            editing and music producing from watching youtube tutorials and
            browsing the internet. Later in life I developed an interest in
            Science and I went to Patras University to study Physics. While
            studying I realised that my passion for Science and Software go hand
            in hand. For the past year I've been focusing on learning JavaScript
            and its ecosystem. I feel like I'm at the point now where joining a
            professional development team is the best way to keep me growing and
            learning.
          </p>
        </div>
        <div className="about-skills-container">
          <h3 className="about-skills-title">My Skills</h3>
          <p className="about-skills-btns">
            <button className="skill-btn">HTML</button>
            <button className="skill-btn">CSS</button>
            <button className="skill-btn">JavaScript</button>
            <button className="skill-btn">React</button>
            <button className="skill-btn">Express (Node)</button>
            <button className="skill-btn">MongoDB</button>
            <button className="skill-btn">SQL</button>
            <button className="skill-btn">Git</button>
            <button className="skill-btn">C#</button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
