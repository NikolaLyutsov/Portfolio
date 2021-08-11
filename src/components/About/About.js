import './About.css';
import profile from '../../images/profile.jpg';

export default function About() {
    return (
        <section className="about">
            <div className='grid-c1'>
              <h1>
                Hi, I'm Nikola.
                <br/>I love to build amazing
                apps.
              </h1>
              <p>
              I am a graduated front-end developer
              from Swift Academy. Now I am searching
              for a junior front-end developer job to
              evolve <br/> my knowledge and work in
              complicated projects. I am currently
              studying React in www.udemy.com
              </p>
              <div className='grid-c2'>
                <a href="#contact" className='button1'>
                  Work With Me
                </a>
                <a href="#projects" className='button1 toRight'>
                  See My Past Projects
                </a>
              </div>
            </div>
            <div className='profile-img'>
              <img
                alt="profile"
                src={profile}
              />
            </div>
        </section>
      );
}