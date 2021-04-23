import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import routes from './routes'
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
     
        {routes}
      </header>
    </div>
  );
}

export default App;
