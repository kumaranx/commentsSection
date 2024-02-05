import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
const { Routes, Route } = require('react-router-dom')

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />

    </Routes>
  );
}

export default App;
