import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header'
import Todo from './Todo';

import Login from './Login'

import {Routes,Route} from "react-router-dom"
import Registration from './Registration';

function App() {
  return (
  <>
?
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Registration />} />
      <Route path='/todo' element ={<Todo/>}/>
    
    </Routes>
  </>
  );
}

export default App;



