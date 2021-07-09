import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      App Component
      <br/>
      <Link to="movies">Movies</Link>
    </div>
  );
}

export default App;
