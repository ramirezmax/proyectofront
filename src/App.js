import './App.css';
import Button from './Components/Button/Button';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Button/>
    </div>
  );
}

export default App;