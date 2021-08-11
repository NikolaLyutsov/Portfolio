import { AcademicCapIcon } from "@heroicons/react/solid";
import './Education.css';

export default function Education() {
    return(
    <section className='Education' id ='education'>
        <AcademicCapIcon className='AcademicCapIcon'/>
        <div className='education-text'>
            <h1>Education</h1>
            <h2>Master of Computer Science</h2>
            <p>Veliko Turnovo University "Cyril and Methodius"</p>
            <h2>Bachelor of Social Works</h2>
            <p>Veliko Turnovo University "Cyril and Methodius"</p>
            <h2>Student of Operating Accounting</h2>
            <p>PGI Racho Stoyanov</p>
        </div>
        <div className='courses-text'>
            <h1>Courses</h1>
            <a href='https://swift.bg/certificates/nikoladobrevlyutsov/918e8301.pdf'><span>Swift Academy: Front-End Course</span></a>
            <a href='https://www.efset.org/cert/uSxYsp'><span>English EF SET Certificate C1</span></a>
            <a href='#'><span>Cisco Networking Academy IT Essentials:PC Hardware and Software 05/2010</span></a>
        </div>
    </section>
    )};