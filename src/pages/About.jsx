import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function About() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-container">
          <h1 className='font-semibold' id='style'>About Me</h1>

          <section>
            <h2>👋 Hello, I'm Tanmay</h2>
            <p>
              I'm a tech enthusiast, blogger, and developer passionate about solving real-world
              tech problems and sharing solutions with the world. My goal is to simplify
              complicated technical topics and help beginners grow.
            </p>
          </section>

          <section>
            <h2>🛣️ My Journey</h2>
            <p>
              I started my journey in tech out of curiosity and gradually developed a strong
              interest in coding, cybersecurity, and development. Over time, I’ve worked on
              several projects, explored multiple technologies, and built platforms to help others
              learn.
            </p>
          </section>

          <section>
            <h2>🎯 Why This Blog?</h2>
            <p>
              “Tech With Tanmay” is a platform where I share coding tutorials, IT tips, and tech
              tricks that help solve daily challenges faced by learners and professionals. My aim
              is to keep the content simple, practical, and helpful.
            </p>
          </section>

          <section>
            <h2>💻 Technologies I Work With</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js, Node.js</li>
              <li>Python, Django, MySQL</li>
              <li>Numpy, Pandas, MongoDB</li>
              <li>Kali Linux, Cybersecurity Tools</li>
              <li>WordPress, Git & GitHub</li>
            </ul>
          </section>

          <section>
            <h2>😄 Some Fun Facts</h2>
            <ul>
              <li>I enjoy breaking down complex topics into easy explanations.</li>
              <li>I'm a big fan of cricket and love playing on weekends.</li>
              <li>I constantly experiment with new tools and tech stacks.</li>
            </ul>
          </section>

          <section>
            <h2>🌐 My Other Websites</h2>
            <p>
              Explore more of my work on these platforms:
              <br />
              👉 <a href="https://tanmay-portfolio-vert.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
              <br /> 
            </p>
          </section>

          <section className="thanks">
            <p>Thanks for visiting my blog! Feel free to explore and connect.</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
