import {useState} from 'react';
import './components/navbar.css';
import './components/hero.css';
import './components/shorten.css';
import './components/grid.css';
import './components/footer.css';
import Illustration from './assets/images/illustration-working.svg'
import shortly from './assets/images/logo.svg'
import shortenBg from './assets/images/bg-shorten-desktop.svg'
import brandIcon from './assets/images/icon-brand-recognition.svg'
import customizeIcon from './assets/images/icon-fully-customizable.svg'
import detailedIcon from './assets/images/icon-detailed-records.svg'

function App() {

  const [list, setList] = useState({
    url: ""
  });

  const [listItem, setListItem] = useState([]);

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
      setListItem([...listItem, list ])
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
            backgroundImage: `url(${shortenBg})`,
            backgroundSize: 'cover'
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
        {listItem.map((item, index) => {
            return (
              <div className="shorten-links-container" key={index}>
              <div className="shorten-links-left">
                  <li>
                    {item.url}
                  </li>
              </div>
              <div className="shorten-links-right">
                 <button id="copy">Copy</button>
              </div>
            </div>
            )
          })}
                  
        <h3 id='advanced-title'>Advanced Statistics</h3>
        <p id='advanced-text'>
          Track how your links are performing across the web with
           our advanced statistics dashboard
        </p>
        <div className="grid-container"> 
            <div class="grid-item">
              <img id='grid-icon' src={brandIcon} />
              <h4>Brand recognition</h4>
              <p>Boost your brand recognition with
                each click. Generic links dont mean a
                thing. Branded links help instil
                confidence in your content.
              </p>
            </div>
            <div class="second-grid-item">
              <img id='second-grid-icon' src={detailedIcon} />
              <h4>Detailed Records</h4>
              <p>Gain insights into who is clicking your
                links.Knowing when and where
                people engage with your contenthelps inform better decisions. 
              </p>
            </div>
            <div class="third-grid-item">
              <img id='third-grid-icon' src={customizeIcon} />
              <h4>Fully Customizable</h4>
              <p>Improve brand awarness and
                content discoverabiltiy trough
                cuztomisable links. Supercharging
                audience engagement.
              </p>
            </div>  
        </div>
        <div className='banner-container' 
        style={{
          backgroundImage: `url(${shortenBg})`,
          backgroundSize: 'cover'
        }}>
            <h3>Boost your links today</h3>
            <button>Get started</button>
        </div>
        <div className='footer-container'>
            <footer>
                <p>Author: Hege Refsnes
                <a href="mailto:hege@example.com">hege@example.com</a>
                </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
