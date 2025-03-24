import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section>
      <div className="portfolio" id="project">
        <div className="main-text" id="project">
          <h2>
            {' '}
            Latest <span>Project</span>
          </h2>
          <div className="portfolio-content" style={{ display: 'flex' }}>
            <ProjectCard
              imageUrl="images/Calculator.png"
              title="Calculator"
              description="The application allows users to submit a form and stores the submitted data in a MongoDB database. It also provides an endpoint to retrieve all submitted form data."
              link="https://216037150.github.io/OOP_JavaScript_calculator/"
            />
            <ProjectCard
              imageUrl="images/Booking_system.png"
              title="Booking System"
              description="The application allows users to submit a form and stores the submitted data in a MongoDB database. It also provides an endpoint to retrieve all submitted form data."
              link="https://github.com/216037150/Simple_Website"
            />
            <ProjectCard
              imageUrl="images/Booking_system.png"
              title="Booking System"
              description="The application allows users to submit a form and stores the submitted data in a MongoDB database. It also provides an endpoint to retrieve all submitted form data."
              link="https://github.com/216037150/Simple_Website"
            />
            <ProjectCard
              imageUrl="images/API.PNG"
              title="Rest API"
              description="The application allows users to submit a form and stores the submitted data in a MongoDB database. It also provides an endpoint to retrieve all submitted form data."
              link="https://github.com/216037150/Rest-API"
            />
            <ProjectCard
              imageUrl="images/ChessBoard.PNG"
              title="Chess Board"
              description="The application allows users to submit a form and stores the submitted data in a MongoDB database."
              link="https://216037150.github.io/Chessboard/"
            />
            <ProjectCard
              imageUrl="images/Booking_system.png"
              title="Booking System"
              description="The application allows users to submit a form and stores the submitted data in a MongoDB database. It also provides an endpoint to retrieve all submitted form data."
              link="https://github.com/216037150/Simple_Website"
            />
            <ProjectCard
              imageUrl="images/Snake.png"
              title="Snake Game"
              description="This code forms a basic snake game where the player controls the snake with the arrow keys to eat food, growing the snake and increasing the score. The game ends if the snake collides with the walls or itself."
              link="https://216037150.github.io/snakeGame/"
            />
            <ProjectCard
              imageUrl="images/Tutering.PNG"
              title="UI/UX Design"
              description=""
              link="https://tuturing-web-site.vercel.app/"
            />
            <ProjectCard
              imageUrl="images/Roll.PNG"
              title="Rolling a dice"
              description=""
              link="https://216037150.github.io/Rolling-dice/"
            />
            <ProjectCard
              imageUrl="images/MachineP.png"
              title="Machine-Learning-Diabetes"
              description="This repository contains code for analyzing and predicting diabetes readmission using machine learning techniques."
              link="https://github.com/216037150/Machine-Learning-Diabetes"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;