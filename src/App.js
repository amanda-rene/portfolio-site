import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Home/>
        {routes}
      </header>
    </div>
  );
}

export default App;
