import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import { UserProvider } from './Component/UserContext/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>}/>
     </Routes>
     </BrowserRouter>
     </UserProvider>
    </div>
  );
}

export default App;
