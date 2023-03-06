import logo from './logo.svg';
import './App.css';

function App() {

  const [score, setScore] = useState(0)
  

  function threepointer (score){
    var probrandom = Math.floor((Math.random() * 100) + 1)
    if (probrandom > 80){
      let tmp = counter + 3
      setScore(tmp)
    }
  }

  
  return (
    <div className="App">
      Basketball
      <button type="button" value="Threepointer" onClick={threepointer}/>
      
    </div>
  );
}

export default App;
