import React from 'react';
import '../../styles/resume.css';

export default function Resume() {
  return (
    <div className='resume'>
      <div className='resume-header'>
        <h1>Resume</h1>
        < a href="/resume.pdf" target="_blank" download>Click Here to Download My Resume</a>
        <h1>Skills</h1>
      </div>
      <div className='skills-container'>
        <div className='skills'>
          <h2>Front-End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
          </ul>
        </div>
        <div className='skills'>
          <h2>Back-End</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className='skills'>
          <h2>Other</h2>
          <ul>
            <li>Git</li>
            <li>Heroku</li>
            <li>Webpack</li>
            <li>Agile Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
