import logo from './logo.svg';
import './App.css';

import Home from './Home';
import { DataLayer } from './Context/UseContext';
function App() {
  return (
    <div className="App">
      <DataLayer>
          <Home/>
      </DataLayer>
    </div>
  );
}

export default App;
