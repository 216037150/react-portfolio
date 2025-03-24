import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2 className="spancontact">
          {' '}
          Contact <span>Me</span>
        </h2>
        <h4>Feel free to contact Me</h4>
        <p>
          I am proficient in communication skills, including group work and group
          leadership. I have used GitHub for version control and code
          collaboration.
        </p>
        <div className="contact-list">
          <li>
            <i className="bx bxs-send"></i>siyabongazungu95@gmail.com
          </li>
          <li>
            <i className="bx bxs-phone"></i>0609360456
          </li>
        </div>
        <div className="contact-icon">
          <a href="https://www.tiktok.com/foryou?lang=en">
            <i className="bx bxl bxl-tiktok" style={{ color: '#1be0b8' }}></i>
          </a>
          <a href="https://www.instagram.com/accounts/onetap/?next=%2F&hl=en">
            <i className="bx bxl-instagram" style={{ color: '#1be0b8' }}></i>
          </a>
          <a href="https://twitter.com/home?lang=en-za">
            <i className="bx bxl-twitter" style={{ color: '#1be0b8' }}></i>
          </a>
          <a href="https://www.linkedin.com/in/siyabonga-zungu-851a501b4/">
            <i className="bx bxl-linkedin" style={{ color: '#1be0b8' }}></i>
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="0bd3a86f-9fb7-4378-a775-e3daca14915b" />
          <input id="FullName" placeholder="Enter your name" type="text" name="name" required />
          <input type="email" name="email" id="Email" placeholder="Enter your Email" required />
          <input type="text" id="Subject" placeholder="Enter your Subject" required />
          <textarea id="Message" name="message" cols="40" rows="10" placeholder="Enter your message" required></textarea>
          <input type="submit" value="Submit" className="send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;