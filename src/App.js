import logo from './logo.svg';
import './App.css';
import TextEditor from './component/TextEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Jonathan's<br/>Internship Assignment React Text Editor </h1>
      </header>
      <div className="editor">
      <TextEditor/>
      </div>
    </div>
  )
}

export default App;
