import React from "react";
import './Resume.css';

export default function Resume() {
  return (
    <div className="resume-container"> <br />
     
      <h1 className="name">Brandon Michael Kelly</h1> <br />

      <div className="contact-info">
        Cottonwood, AZ 86326 | Phone: 928-274-6725<br />
      </div>

      <div className="contact-link">
        <a href="mailto:kbrandon863@gmail.com">Email</a>
        <div className="separator">|</div>
        <a href="https://www.linkedin.com/in/brandon-kelly-367b3730b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <div className="separator">|</div>
        <a href="https://github.com/bkness" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div><br /> <br />

      <h2 className="section-title">Summary</h2> <br />
     
     <p className="summary">
        Dedicated and detail-oriented Web Developer and Full-Stack Bootcamp graduate, skilled in HTML, CSS, JavaScript, TypeScript, Node, React, MongoDB, GraphQL and SQL. Passionate about creating user-friendly and visually appealing web applications. Demonstrates strong multitasking abilities, excellent problem-solving skills, and a keen eye for detail. Leverages a diverse background in high-pressure environments and customer service to deliver efficient, high-quality results. Experienced in project management, customer service, leadership, and botany from previous roles, bringing a unique perspective to web development.      </p> <br />

      <h2 className="section-title">Technical Skills</h2> <br />
      <p className="skills">
        <strong className="skill-def">Languages:</strong> HTML5, CSS3, JavaScript, React<br />
        <strong className="skill-def">Frameworks & Libraries:</strong> Bootstrap, Tailwind, jQuery, Redux, Handlebars.js, Node.js<br />
        <strong className="skill-def">Tools & Platforms:</strong> Git, GitHub, VS Code, Heroku, MongoDB, GraphQL, Netlify, Render, Firebase<br />
        <strong className="skill-def">Other:</strong> Responsive Design, RESTful APIs, Agile Methodologies
      </p> <br />

      <h2 className="section-title">Related Experience</h2> <br />
     
      <div className="project">
        <strong className="project-description">Arizona State University Web Development Program</strong>
      </div><br />

      <div className="project">
        <strong className="project-description">Local Brewery Finder</strong> |
        <a href="https://github.com/bkness/LocalBreweries" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://radiant-fjord-87739-920e7bb79c22.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live</a><br />
        Developed a full-stack application for users to post and comment on tech articles.<br />
        <strong className="project-description">Responsibilities:</strong> Developed a web application integrating an API to find local breweries, allowing users to log in, save favorite breweries, and manage their personalized lists <br />
        <strong className="project-description">Role:</strong> RESTful API integration of Open Brewery DB, Map functionality when ‘view map’ for the brewery is pressed, CSS <br />
        <strong className="project-description">Technologies | Languages:</strong> Node.js, Express.js, RESTful API, Handlebars, SQL, NPM, HTML
      </div> <br />

      <div className="project">
        <strong className="project-description">NBA Standings Application</strong> |
        <a href="https://github.com/bkness/jungle-map-api " target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://bkness.github.io/jungle-map-api/" target="_blank" rel="noopener noreferrer">Live</a><br />
        Built a web application to generate random cocktail recipes using an external API. <br />
        <strong className="project-description">Responsibilities:</strong> Responsive sports standings app using Tailwind, integrating two APIs for real-time data and implementing client-side storage for persistent data <br />
        <strong className="project-description">Role:</strong> Integration of Sports API, Modal design and functionality, CSS <br />
        <strong className="project-description">Technologies | Languages</strong> Server Side API, Local Storage, Tailwind CSS, HTML5
      </div> <br />

      <div className="project">
        <strong className="project-description">Tech Blog</strong> |
        <a href="https://github.com/bkness/MVC-Tech-Blog" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://mvc--tech-blog-715ec89956fb.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live</a><br />
        Developed a full-stack application for users to post and comment on tech articles.<br />
        <strong className="project-description">Responsibilities:</strong> Created front-end interface with Handlebars.js, implemented user authentication, and set up RESTful API routes. <br />
        <strong className="project-description">Role:</strong> Integrated MySQL2 and Sequelize for robust user information management, implemented user authentication, and utilized Handlebars template engine for dynamic data rendering. <br />
        <strong className="project-description">Technologies | Languages</strong> Express, Handlebars, MySQL, Sequelize, Bcrypt, dotenv, and Google Fonts
      </div> <br />

      <div className="project">
        <strong className="project-description">Open Weather Dashboard</strong> |
        <a href="https://github.com/bkness/open-weather-api" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://bkness.github.io/open-weather-api" target="_blank" rel="noopener noreferrer">Live</a><br />
        Created a weather application that fetches and displays weather data for user-selected cities.<br />
        <strong className="project-description">Responsibilities:</strong> Developed front-end with HTML, CSS, and JavaScript, implemented API calls, and handled data presentation.<br />
        <strong className="project-description">Technologies:</strong> HTML, CSS, JavaScript, OpenWeatherAPI
      </div> <br /> <br />

      <h2 className="section-title">Experience</h2> <br />

      <div className="experience">
        <div className="work-with-date">
          <div className="left-container">
            <strong className="project-description">Abundant Organics | Gardener</strong>
          </div>
          <div className="right-container">
            <strong className="date">March 2019 – January 2021</strong><br />
          </div>
        </div>
        <div className="location"> Cottonwood, AZ<br /></div> <br />
        <p>Experienced organic gardener proficient in crafting microbial and Neem teas for pest control, optimizing plant growth through strategic transplanting and meticulous watering schedules. Skilled in soil testing to maintain ideal pH and nutrient levels, with a focus on effective teamwork to maximize yield and manage labor costs efficiently</p><br />
        <ul>
          <li>Achieved a 20-40% increase in yields by implementing effective watering and pruning techniques. Recognized for performance and promoted internally to a salaried position based on demonstrated results and dedication</li>
        </ul> <br />
      </div> <br />

      <div className="experience">
        <div className="work-with-date">
          <div className="left-content">
            <strong className="project-description">Main Stage | Bartender</strong>
          </div>
          <div className="right-content">
            <strong className="date">June 2015 – November 2023</strong>
          </div>
        </div>
        <div className="location">Cottonwood, AZ</div><br />
        <p>Experienced bartender in a dynamic nightclub environment at Main Stage, adept in high-volume service and proficient in till management. Skillfully prepares a diverse range of craft cocktails and mixed drinks while maintaining exceptional customer service standards amidst live music performances.</p> <br />
        <ul>
          <li>Successfully maintained high service standards and efficiency in a fast-paced nightclub environment.</li> <br />
          <li>Remained on call due to exceptional performance and critical thinking skills.</li> <br />
        </ul>
      </div> 

      <div className="experience">
        <div className="work-with-date">
          <div className="left-content">
            <strong className="project-description">Enchantment Resort | Bartender</strong>
          </div>
          <div className="right-content">
            <strong className="date">March 2018 – March 2019</strong>
          </div>
        </div>
        <div className="location">Sedona, AZ<br /></div> <br />
        <p>Experienced bartender at a prestigious resort, adeptly working two restaurant bars and occasionally assisting at the pool bar. Promoted to Head Bartender at Che Ah Chi, the fine dining restaurant known for signature prickly pear cocktails and handcrafted drinks featuring fresh ingredients like ginger and lime. Demonstrated proficiency in inventory management and expanded responsibilities to assist the Food and Beverage Manager with wine cellar inventory.</p>
        <ul><li>Gained valuable multicultural experience by serving a diverse international clientele.</li> <br />
          <li>Successfully managed cocktail service for three distinct restaurants in a fast-paced fine dining environment, reducing labor costs while increasing profit</li></ul> </div> <br />

      <h2 className="section-title">Education</h2> <br />

      <div className="education"> 
        <div className="work-with-date">
          <div className="left-content">
            <strong className="project-description">Full Stack Web Development Boot Camp Certificate</strong>
          </div>
          <div className="right-container">
            <strong className="date">February 2024</strong><br />
          </div>
        </div>
        <div className="location">Arizona State University, Phoenix, AZ</div><br />
        <p>Completed an intensive program focused on full-stack development, covering HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. Developed and deployed multiple web applications, gaining hands-on experience in agile development methodologies and project management.</p> <br />
      </div>
    </div>
  );
}
