import PersonCard from './components/prop'
import './App.css';
const people = [
  {
    firstName: "Jonathan",
    lastName: "Kwon",
    age: 30,
    hair: "black"
  },
  {
    firstName: "Lamar",
    lastName: "Jackson",
    age: 27,
    hair: "black"
  },
  {
    firstName: "Ja'marr",
    lastName: "Chase",
    age: 24,
    hair: "black"
  },
  {
    firstName: "Tom",
    lastName: "Brady",
    age: 45,
    hair: "brown"
  }
]

function App() {
  return (
    <div className="App">
      {people.map((p, i) => {
        return (<PersonCard x={p} key={i}/>)
      })
    }
    </div>
  );
}

export default App;
