import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import { UserProvider } from './Component/UserContext/UserContext';
import Delete from './Component/Delete/Delete';

function App() {
  return (
    <div className="App">
      <UserProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='delete/:id' element={<Delete></Delete>}/>
     </Routes>
     </BrowserRouter>
     </UserProvider>
    </div>
  );
}

export default App;
