import React, {useRef ,useState} from 'react'
import CustomHook from './CustomHook'

const Contacts = () => {
  const [listContatcs] = useState ([
    {
      title: 'Email',
      value:'rnbrosca2003@gmail.com'
    },
    {
      title: 'Phone Number',
      value: '+40739352977'
    },
    {
      title: 'Instagram',
      value: 'bogdanneee'
    }
  ]);
  const refTab = useRef();
  const divs =useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Here you can reach out to me
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        nag oafn  ngoarn ganorng ongaron garong garon
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {
          listContatcs.map((value, key) => (
            <div key={key} className="item" >
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Contacts
