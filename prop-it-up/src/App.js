import PersonCard from './components/prop'
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jonathan" lastName="Kwon" age="30" hairColor="Black"/>
      <PersonCard firstName="Sally" lastName="Wally" age="23" hairColor="Orange"/>
      <PersonCard firstName="Blake" lastName="Fulgham" age="32" hairColor="Brown"/>
      <PersonCard firstName="Jin" lastName="Pham" age="25" hairColor="Blonde"/>
    </div>
  );
}

export default App;
