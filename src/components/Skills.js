import React, { useRef , useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel} from '@fortawesome/free-brands-svg-icons'
import CustomHook from './CustomHook'

const Skills = () => {
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      icon: faHtml5,
    },
    {
      name: 'CSS',
      des: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      icon: faCss3,
    },
    {
      name: 'React',
      des: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      icon: faReact,
    },
    {
      name: 'JavaScript',
      des: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      icon: faJs,
    },
    {
      name: 'JavaScript',
      des: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      icon: faJs,
    },
    {
      name: 'JavaScript',
      des: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
      icon: faJs,
    }
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        These are my skills
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
      orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
      </div>
      <div className="list">
        {
          listSkills.map((value, key) => (
            <div key={key} className="item" ref={(el) => el && refDivs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills
