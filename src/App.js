import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav
           style={{
             borderBottom: "solid 1px",
             paddingBottom: "1rem",
           }}
        >
          <Link to="/login" style={{paddingRight: "1rem"}}>Login</Link>
          <Link to="/editor">Editor</Link>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
