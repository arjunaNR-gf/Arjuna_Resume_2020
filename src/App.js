import './App.css';
import MyResume from './Myresume';
import {BrowserRouter as Router,Route,  Link, Switch,  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
  
      <Switch>
        <Route path="/" component={MyResume}/>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
