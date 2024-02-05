import './App.css';
import SignUp from './components/SignUp';
const { Routes, Route  } = require('react-router-dom')

function App() {
  return (
    <Routes>
      <Route path='/signup' element = { <SignUp /> } />
    </Routes>
  );
}

export default App;
