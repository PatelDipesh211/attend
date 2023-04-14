import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './home';
import navbar from './navbar';
import Add from './add';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' Component={navbar}/>
      </Routes>
      <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/add' Component={Add}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
