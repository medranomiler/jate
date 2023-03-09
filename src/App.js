import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

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
