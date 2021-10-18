import './App.css';
import Count from'./Components/Count.js'
import Formulaire from './Components/Formulaire.js'
import Apitest from './Components/Apitest.js';
function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <Count />

        <Formulaire />

        <Apitest />
      </header>
    </div>
  );
}

export default App;
