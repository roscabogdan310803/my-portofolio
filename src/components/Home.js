import React, {useRef} from 'react'
import CustomHook from './CustomHook'

const Home = () => {
  const refTab =useRef()
  CustomHook(refTab)
  return (
    <section className='home' ref={refTab}>
      <div className='content'>
        <div className='name'>
          MY NAME IS <span>Bogdan</span>
        </div>
        <div className='des'>
        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <a href='#' target='_blank' rel='noopener noreferrer'>Here you can find my CV</a>
      </div>
      <div className='avatar'>
        <div className="card">
          <img src="/lifteu.jpg" alt="" />
          <div className="info">
            <div>Web Developer</div>
            <div>Romania</div>
            <div>Tech</div>
            <div>Passion</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
