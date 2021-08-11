import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import './Skills.css';

export default function Skills() {
  const skills = ['HTML', 'CSS', 'SAAS', 'LESS', 'Bootstrap', 'Javascript', 'React', 'Git', 'GitHub Desktop', 'Firebase'];
  return (
    <section className="skillss">
      <div>
        <div className="text-center"  id='skills'>
          <ChipIcon className="chipIcon" />
          <h1 className="heading">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="skills">
          {skills.map((skill) =>
            <div>
              <BadgeCheckIcon className="badgeCheckIcon" />
              <span className='technologies'>{skill}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}