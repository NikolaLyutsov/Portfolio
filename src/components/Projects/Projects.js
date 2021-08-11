 import { CodeIcon } from "@heroicons/react/solid";
 import './Projects.css';

import universityProject from '../../images/universityProject.png';
import weatherApp from '../../images/weatherApp.png';
import examSite from '../../images/examSite.png';
import movieList from '../../images/movieList.png';

export default function Projects() {
  return (
    <section className="projects"  id="projects">
        <div className='intro'>
          <CodeIcon className="codeIcon" />
          <h1>
            Apps I've Built
          </h1>
          <p>
            I have used HTML, CSS, SAAS, Javascript and React for these projects. They are all written on Visual Studio Code.
          </p>
        </div>
        <div className="projectsList">
          <div className="project">
            <a href='https://vigilant-bhaskara-bad84f.netlify.app/contacts' key='1' className="link">

            <img alt="gallery" className="project-image" src={universityProject} />
          <div className="hoverr">
            <h1 className="title">University Project</h1>
                  <h2 className="usedTehnolog">HTML, CSS, Javascript</h2>
                  <p className="projects-description">This is a multipage website. It is a advertising website for a nightclub.
                   I wrote it on Visual Studio Code using HTML, CSS SAAS and Javascript.
                   The site is responsive I made it with flex. On page Gallery you can change images, I made that with javascript.</p>
          </div>
            </a>
          </div>
          <div className="project">
            <a href='https://peaceful-shaw-f47864.netlify.app' key='2' className="link">
            <img alt="gallery" className="project-image" src={weatherApp} />
          <div className="hoverr">
            <h1 className="title">Weather App</h1>
                  <h2 className="usedTehnolog">HTML, CSS, Javascript</h2>
                  <p className="projects-description">This is a weather app.I wrote it on Visual Studio Code using HTML, CSS and Javascript.
                   When you input a city it shows the degree, weather, humidity and wind speed</p>
          </div>
            </a>  
          </div>
          <div className="project">
            <a href='https://gallant-colden-2f354a.netlify.app/#html' key='2' className="link">
            <img alt="gallery" className="project-image" src={examSite} />
          <div className="hoverr">
            <h1 className="title">Exam Site</h1>
                  <h2 className="usedTehnolog">HTML, CSS, Javascript</h2>
                  <p className="projects-description">This is a sample website that I wrote on Visual Studio Code using HTML, CSS 
                  and Javascript on my exam in Swift Academy.</p>
          </div>
            </a>  
          </div>
          <div className="project">
            <a href='https://friendly-sammet-517296.netlify.app/' key='2' className="link">
            <img alt="gallery" className="project-image" src={movieList} />
          <div className="hoverr">
            <h1 className="title">Movie List</h1>
                  <h2 className="usedTehnolog">HTML, CSS, React</h2>
                  <p className="projects-description">This is a Movie List app. I wrote it on Visual Studio Code using React.
                   You can add a movie and his price and it shows it</p>
          </div>
            </a>  
          </div>
        </div>
    </section>
  );
}