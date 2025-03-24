import React from 'react';

const Services = () => {
  return (
    <section>
      <div className="services" id="services">
        <div className="container">
          <h1 className="sub-tittle">
            {' '}
            My <span>Services</span>
          </h1>
          <div className="services-list">
            <div>
              <i className="bx bx-code" style={{ color: '#1be0b8', width: '4px', height: '60px' }}></i>
              <h2>Full Stack Developer</h2>
              <p>
                {' '}
                Dedicated to delivering robust and innovative solutions, adept at
                collaborating within cross-functional teams to drive project success.
                Eager to leverage my skills and expertise to contribute effectively
                to dynamic software development projects.
              </p>
              <a href="https://github.com/216037150/Java-number-guessing" className="read">
                {' '}
                Learn More
              </a>
            </div>

            <div>
              <i className="bx bx-crop" style={{ color: '#1be0b8' }}></i>
              <h2>Full Stack Web Developer</h2>
              <p>
                {' '}
                Dedicated to delivering robust and innovative solutions, adept at
                collaborating within cross-functional teams to drive project success.
                Eager to leverage my skills and expertise to contribute effectively
                to dynamic software development projects.
              </p>
              <a href="https://github.com/216037150/Simple_Website" className="read">
                {' '}
                Learn More
              </a>
            </div>
            <div>
              <i className="bx bxl-apple" style={{ color: '#1be0b8' }}></i>
              <h2>Front End Developer</h2>
              <p>
                {' '}
                Dedicated to delivering robust and innovative solutions, adept at
                collaborating within cross-functional teams to drive project success.
                Eager to leverage my skills and expertise to contribute effectively
                to dynamic software development projects.
              </p>
              <a href="https://github.com/216037150/HackathonCityofCapeTown" className="read">
                {' '}
                Learn More
              </a>
              <i className=" box-icon" style={{ color: '#1be0b8' }}></i>
            </div>
            <div>
              <i className="bx bxl-apple" style={{ color: '#1be0b8' }}></i>
              <h2>Back End Developer</h2>
              <p>
                {' '}
                Dedicated to delivering robust and innovative solutions, adept at
                collaborating within cross-functional teams to drive project success.
                Eager to leverage my skills and expertise to contribute effectively
                to dynamic software development projects.
              </p>
              <a href="https://github.com/216037150/form_survey" className="read">
                {' '}
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;