import logo from "./logo.svg";

import "./App.css";
import { AppNavBar } from "./components/AppNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Customer } from "./pages/Customer";
import { Description } from "./components/Description";

function App() {
  return (
    <div>
      
      <AppNavBar></AppNavBar>
        <Routes>
        
          <Route path={"/login"} element={<Login></Login>}></Route>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'/contactus'} element={<Customer></Customer>}></Route>
          <Route path={'/description'} element={<Description></Description>}/>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>

        <Footer></Footer>
     
    </div>
  );
}

export default App;
