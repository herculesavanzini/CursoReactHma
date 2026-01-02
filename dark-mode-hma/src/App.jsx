import { useEffect, useState } from 'react'
import './App.css'
import logoLight from './assets/logo.png'
import logoDark from './assets/logo2.png' 
import codeDark from './assets/code-dark.png'
import codeLight from './assets/code-light.png'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true' );
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);
  const toogleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "app dark" : "app"} >

    <img src={isDarkMode?logoLight:logoDark} alt="Logo IFSC" className='logo'/>

      <button className='darkmode-btn' onClick={toogleDarkMode}>
          {!isDarkMode&&<i className='bx  bx-moon-star'></i>}
          {isDarkMode&&<i className='bx  bx-sun-bright'></i>  }
      </button>

      <div className="main-container">
        <div className="main-content">
          <h1>
            <span className='react-text'>React</span>+ Javascript <br/> 
            <span className='highlight'>Aprenda sem limites</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos autem eius obcaecati facere provident consequatur. Veritatis est quod voluptate ut veniam eaque enim ex cum, dolores, ipsam illum beatae. Amet!
          </p>
          <span className="prof">Prof. Eduardo Gomes do IFSC</span>
          <div className="buttons">
            <button className='primary'
              onClick={()=> window.open('https://moodle4.ifsc.edu.br/', '_blank')}>Acessar o Moodle</button>
            <button className='secondary' 
            onClick={()=>window.open('https://sigaa.ifsc.edu.br/sigaa/', '_blank')}>Acessar o Sigaa</button>
          </div>
          <div className='reviews'>
            <img className='avatar' src="https://randomuser.me/api/portraits/men/75.jpg" alt="user1" />
            <img className='avatar' src="https://randomuser.me/api/portraits/women/74.jpg" alt="user2" />
            <img className='avatar' src="https://randomuser.me/api/portraits/men/3.jpg" alt="user3" />
            <span className="plus">+700</span>
            <span className="star">
              {[...Array(5)].map((_, index) => (
                <i key={index} className='bx  bxs-star'></i>
              ))}
              5/5
            </span>
            <span>Mais de <strong>700</strong> desenvolvedores</span>
          </div>
        </div>

        <div className="code-example">
          <div className="code-header">
            {isDarkMode?'dark':'light'}-mode.jsx
          </div>
          <img src={isDarkMode?codeDark:codeLight} alt="React code" className='code'/>
          <div className="code-tags">
            <span className="tag react">React</span>
            <span className="tag js">JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
