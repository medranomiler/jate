import './App.css';
import Navbar from './pages/Navbar'
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Home from '../src/pages/Home';
// import Signup from './pages/Signup.js';


function App() {
  return (
    <div>
      <Navbar />
      {/* {/* <Signup /> */}
      <Home />
      {/* <Login /> */ }
      
    </div>
  );
}

export default App;
