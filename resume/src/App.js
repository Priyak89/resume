import logo from './logo.svg';
import './App.css';
//import Helloworld from './helloworld';
import Element from './helloworld';
import People from './components';
import Clockdisp from './clock';
import Toggle from './toggle';

function App() {
  return (
    <div className="App">
    { Element }
    <People/>
    <Clockdisp/>
    <Toggle/>
    </div>
  );
}

export default App;
