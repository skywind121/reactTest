import logo from './logo.svg';
import './App.css';

const testFunction=()=> {
  return(
    <div>
      <button>大家好</button>
      <h1>我不好</h1>
    </div>
  );
}

const getValue=(event)=>{
  console.log(event.target.value);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.Hi          
        </p>        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React(Web)
        </a>
        hello world2
        {testFunction()}
        <button value={true} onClick={getValue} >Yes</button>        
      </header>
    </div>
  );
}

export default App;
