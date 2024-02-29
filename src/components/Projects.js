import React, {useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import CustomHook from './CustomHook'

const Projects = () => {
  const [listProjects] = useState([
    {
      name: 'Login CSS',
      des:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      live: 'https://roscabogdan310803.github.io/shoop/',
      language:'HTML, CSS, JAVASCRIPT',
      images:'/shoop.png',
      git:'https://github.com/roscabogdan310803/shoop',
    },
    {
      name: 'Login CSS',
      des:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      live: 'https://roscabogdan310803.github.io/shoop/',
      language:'HTML, CSS, JAVASCRIPT',
      images:'/shoop.png',
      git:'https://github.com/roscabogdan310803/shoop',
    },
    {
      name: 'Login CSS',
      des:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      live: 'https://roscabogdan310803.github.io/shoop/',
      language:'HTML, CSS, JAVASCRIPT',
      images:'/shoop.png',
      git:'https://github.com/roscabogdan310803/shoop',
    },
    {
      name: 'Login CSS',
      des:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      live: 'https://roscabogdan310803.github.io/shoop/',
      language:'HTML, CSS, JAVASCRIPT',
      images:'/shoop.png',
      git:'https://github.com/roscabogdan310803/shoop',
    },
    {
      name: 'Login CSS',
      des:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      live: 'https://roscabogdan310803.github.io/shoop/',
      language:'HTML, CSS, JAVASCRIPT',
      images:'/shoop.png',
      git:'https://github.com/roscabogdan310803/shoop',
    },
    {
      name: 'Login CSS',
      des:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      live: 'https://roscabogdan310803.github.io/shoop/',
      language:'HTML, CSS, JAVASCRIPT, BOOTSTRAP',
      images:'/shoop.png',
      git:'https://github.com/roscabogdan310803/shoop',
    },
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        Some projects that i did
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        orem Ipsum is simply dummy text of the printing and typesettin
      </div>
      <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && refDivs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content" ref={(el) => el && refDivs.current.push(el)}>
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Project</h4>
                        <div className='btn'>
                          <a class="bn31" href={value.live} target='_blank'><span class="bn31span">Live Demo</span></a>
                          <a href={value.git} target='_blank' class="bn3637 bn38">Code</a>
                        </div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
