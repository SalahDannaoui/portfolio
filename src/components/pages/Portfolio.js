import React from 'react';
import '../../styles/portfolio.css'

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Here's a selection of my most recent work</p>
      <br></br>
      <div class="section_content">


<a href="https://gator2-0.github.io/Vibe/" class="project-item">
    <img src="/images/Vibe.png"  alt="project pic"></img>
    <div class="img-title">
        <h3>Vibe</h3>
        <p>HTML, CSS, Javascript</p>
    </div>
</a>
<a href="https://github.com/tjsoho/travel-companion" class="project-item">
    <img src="/images/Travel Companion.png" alt="project pic"></img>
    <div class="img-title">
        <h3>Travel Companion</h3>
        <p>NodeJS, Sequelize, ExpressJS, HandlebarsJS</p>
    </div>
</a>
    </div>
    </div>
  );
}
