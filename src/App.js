import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';

function App() {

  // Scroll to the target section smoothly when clicking a link
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  document.title = "Cameron Candau";

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <h1>Cameron Candau</h1>
        </div>
        <div className="header-right">
          <a href="https://www.linkedin.com/in/cameron-candau/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Cam-Can-Do" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>

          <a href="#about-me" onClick={(e) => scrollToSection(e, 'about-me')}>About Me</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </div>
      </header>
      <section id="about-me">
        <h2>About Me</h2>
        <img src="https://lh3.googleusercontent.com/a-/AFdZucpScaW_xJUIS5G0uCod1EUKcTZqEjobNAQfhbkUBA=k-s192" alt="My profile picture" style={{ float: 'right', margin: '0 0 1em 1em', width: '280px', borderRadius: '50%' }} />
        <p>I'm a second-year Computer Science major at Cabrillo College. I'm currently looking for internship opportunities for Summer 2023, in Santa Cruz County, California!</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project 1</h3>
            <p>A brief description of project 1.</p>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>A brief description of project 2.</p>
          </li>
          <li>
            <h3>Project 3</h3>
            <p>A brief description of project 3.</p>
          </li>
        </ul>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>ReactJS</li>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>You can contact me at camcandau@gmail.com.</p>
      </section>
    </div>
  );
}

export default App;
