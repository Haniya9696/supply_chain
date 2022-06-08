import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Home from "./Home/Home";
// import { AppRoutes } from './routes/routes';
// import useAuth from './hooks/useAuth';

import { useForm } from "react-hook-form";
import Distributer from "./Distributer/Distributer";
import Manufacturer from "./Manufacturer/Manufacturer";
function App() {
 
  return (<>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/distributer' element={<Distributer />} />
    <Route path='/manufacturer' element={<Manufacturer />} />

    
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
