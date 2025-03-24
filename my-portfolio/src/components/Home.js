import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Full Stack Developer", "Backend Developer", "Frontend Developer", "Web Developer", "Machine Learning"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home">
            <div className="home-content">
                <h3>Hi, I'm</h3>
                <h1>Siyabonga Zungu</h1>
                <h3>And I am <span ref={typedRef} className="text"></span> </h3>
                <p id="me">
                    I'm a Full Stack Developer with expertise in website creation and design,
                    frontend development, and proficiency in HTML, CSS, Python, JavaScript,
                    and GitHub. I have hands-on experience in full stack development and I'm
                    committed to delivering innovative solutions. Skilled in cross-functional
                    team collaboration, I am ready to leverage my abilities to contribute
                    to dynamic software development projects.
                </p>
                <div className="home-sci">
                    <a href="https://www.instagram.com/accounts/onetap/?next=%2F&hl=en">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://twitter.com/home?lang=en-za">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/siyabonga-zungu-851a501b4/">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/216037150">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
                <a className="btn-box" href="#about">
                    More about Me
                </a>
            </div>
        </section>
    );
};

export default Home;