import './components/navbar.css';
import './components/hero.css';
import './components/shorten.css';
import Illustration from './assets/images/illustration-working.svg'
import shortly from './assets/images/logo.svg'
import shortenBg from './assets/images/bg-shorten-desktop.svg'

function App() {
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
          <input 
          id="shorten-input"
          type="text"
          placeholder="Shorten a link here..."
          />
          <button id="shorten-button">Shorten it!</button>
        </div>
        <div className="shorten-links-container">
          <div className="shorten-links-left">
            <li>
            https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G
            </li>
          </div>
          <div className="shorten-links-right">
            <button id="copy">Copy</button>
          </div>
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
