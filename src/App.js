
import './App.css';
import Register from './pages/Register';
import Login from './pages/LoginPage'
import Header from './components/Header'
import MainPage from './pages/MainPage';
import AddJob from './pages/AddJob';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import SinglePosition from './pages/SinglePosition';



function App() {
  return (
    <div className="App bg-slate-50 text-lg overflow-auto">
      
      <BrowserRouter>
      <Routes >
            <Route element={<Layout />}>
            <Route exact path="/" element={<MainPage />}/>
            <Route exact path="/:category/:id" element={<SinglePosition/>}/>
            </Route>
            <Route  path="/login" element={<Login />}/>
            <Route  path="/signup" element={<Register />}/>
            <Route  path="/addjob" element={<AddJob />}/>
            
    </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
