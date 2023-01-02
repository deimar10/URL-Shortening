import {useState} from 'react';
import './components/navbar.css';
import './components/hero.css';
import './components/shorten.css';
import Illustration from './assets/images/illustration-working.svg'
import shortly from './assets/images/logo.svg'
import shortenBg from './assets/images/bg-shorten-desktop.svg'

function App() {

  const [list, setList] = useState({
    url: ""
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setList({...list, [e.target.name] : [e.target.value]})
  }

  const validation = () => {
    const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    let text = list.url.toString();
   
    if(!text || !text.match(urlRegex)){
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div className="App">
      <div class="topnav">
        <div class="topnav-links">
          <img src={shortly} />
          <a class="active" href="#home">Features</a>
          <a href="#news">Pricing</a>
          <a href="#contact">Resources</a>
        </div>
      <div class="topnav-buttons">
        <button id="login">Login</button>
        <button id="signUp">Sign Up</button>
      </div>
      </div>
      <div className="hero-section">
        <div class="column-left">
          <h2>More than just shorter links</h2>
          <p>Build your brand`s recognition and get detailed
             insights on how your links are performing.</p>
          <button>Get started</button>
        </div>
        <div class="column-rigth">
        <img src={Illustration} />
        </div>
      </div>
      <div className="main-section">
        <div className="shorten-container"
         style={{
            backgroundImage: `url(${shortenBg})`
          }}>
          <input style={{
            border: error === true ? '2px solid hsl(0, 87%, 67%)' : ''
          }}
          id="shorten-input"
          type="text"
          name="url"
          onChange={handleChange}
          placeholder="Shorten a link here..."
          />
          <button onClick={validation} id="shorten-button">Shorten it!</button>
          <p id='error'>
            {error === true ? "Empty or a wrong URL type!" : ''}
          </p>
        </div>
        
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with
           our advanced statistics dashboard
        </p>
      </div>
    </div>
  );
}

export default App;
