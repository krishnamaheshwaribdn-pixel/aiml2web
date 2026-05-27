import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Appp.css'

function Appp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Studentinformation</h2>

      <audio controls>
        <source src="" type="audio/mp3"></source>
      </audio>
      <video controls>
        <source src="" type="video/mp4"></source>
      </video>
      <iframe src="https://www.youtube.com/embed/npJB3PKiKQ4" allowFullScreen></iframe>
      <iframe src="https://www.youtube.com/embed/iLyDaoqO784" allowFullScreen></iframe>
      <img src="https://images.pexels.com/photos/20447506/pexels-photo-20447506.jpeg" width="1000" height="500" />
      <br />
      <button>Click ME</button>
      <h1>welcome to my webpages</h1>
      <h2>Hello</h2>
      <p>AIML-2</p>
    </>
  )
}

export default Appp 