import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import { UserProvider } from './Component/UserContext/UserContext';
import Delete from './Component/Delete/Delete';
import Read from './Component/Read/Read';
import Create from './Component/Create/Create';
import Edit from './Component/Edit/Edit';

function App() {
  return (
    <div className="App">
      <UserProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='delete/:id' element={<Delete></Delete>}/>
      <Route path='/read/:id' element ={<Read></Read>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
     </Routes>
     </BrowserRouter>
     </UserProvider>
    </div>
  );
}

export default App;
