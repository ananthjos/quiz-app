import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Home from "./components/layout/Home";
import TestDetails from "./components/test/TestDetails";
import TestPage from "./components/test/TestPage";
import Results from "./components/test/Results";
import './App.css'


function App() {
  return  <Provider store={store}>

    <div className='container'>
         <Router>
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path ='/user/login' element={<Login/>}/>
             <Route path="/user/register" element={<Register/>}/>
             <Route path="/test-details" element={<TestDetails/>}/>
             <Route path='/test-page/questions' element={<TestPage/>}/>
             <Route path='/results' element={<Results/>}/>
           </Routes>
         </Router>
      </div>;
  </Provider>
}

export default App;
