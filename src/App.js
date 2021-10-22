import { Switch,Route,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Apitest from './Components/Apitest';
import Context from './Components/Context';
import Count from './Components/Count';
import Formulaire from './Components/Formulaire';
import Home from './Components/Home';
import Navigbar from './Components/Navigbar.js';
import Counter, {Reduxpage} from './Components/redux/Counter';

function App()
{
  return (
    <div className="App">
        <header className="App-header">
          <Navigbar />
        </header>

        <div className="App-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/count" component={Count} />
              <Route path="/form" component={Formulaire} />
              <Route path="/quote" component={Apitest} />
              <Route path="/context" component={Context} />
              <Route path="/redux" component={Reduxpage} />

            </Switch>
        </div>
    </div>
  );
}

export default App;
