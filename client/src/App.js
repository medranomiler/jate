import './App.css';
import Navbar from './pages/Navbar'
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
// import Signup from './pages/Signup.js';


function App() {
  return (
    <div>
      <Navbar />
      <Signup />
      <Login />
      
    </div>
  );
}

export default App;
