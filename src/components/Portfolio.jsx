import React from 'react';
import Project from '../components/Project';
import { Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    name: "Tech Blog",
    description: "A blog platform built with MVC architecture.",
    technologies: "Node/JS/CSS/Handlebars",
    link: "https://mvc--tech-blog-715ec89956fb.herokuapp.com/",
    repo: "https://github.com/bkness/MVC-Tech-Blog",
    image: "blog",
  },
  {
    name: "Random Cocktail Generator",
    description: "Application that generates cocktails.",
    technologies: "HTML/JS/CSS",
    link: "https://bkness.github.io/Random-Cocktail-API",
    repo: "https://github.com/bkness/Random-Cocktail-API",
    image: "cocktail",
  },
  {
    name: "Open Weather Database",
    description: "Weather app utilizing local storage.",
    technologies: "HTML/CSS/JS/OpenWeatherAPI",
    link: "https://bkness.github.io/open-weather-api",
    repo: "https://github.com/bkness/open-weather-api",
    image: "weather",
  },
  {
    name: "Video Game Hub",
    description: "Hub for video game information.",
    technologies: "React/Express/Graphql/Mongo",
    link: "https://video-game-hub.onrender.com/",
    repo: "https://github.com/bkness/video-game-hub-project3",
    image: "game",
  },
  {
    name: "Key Generator",
    description: "JavaScript key generator.",
    technologies: "HTML/CSS/JS",
    link: "https://bkness.github.io/javascript-key-generator",
    repo: "https://github.com/bkness/javascript-key-generator",
    image: "keygen",
  },
  {
    name: "Advanced CSS-Portfolio",
    description: "Portfolio made with Flexbox CSS",
    technologies: "HTML/CSS",
    link: "https://bkness.github.io/advanced-css-portfolio",
    repo: "https://github.com/bkness/advanced-css-portfolio",
    image: "portfolio",
  }
];


function Portfolio() {
  return (
    <Container className="my-5">
      <Row>
        {projects.map((project, index) => (
          <Col sm={12} md={6} lg={6} key={index} className="mb-4">
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
