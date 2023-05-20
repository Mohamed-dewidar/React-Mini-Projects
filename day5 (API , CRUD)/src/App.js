import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { AppNavBar } from './components/AppNavBar';
import { NotFound } from './Pages/NotFound';
import { Products } from './components/Products';
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';
import { Details } from './components/Details';

function App() {
  return (
    <div>
      <AppNavBar></AppNavBar>
      <Routes>

        <Route path={'login'} element={<Login></Login>}></Route>
        <Route path={'products'} element={<Products></Products>}></Route>
        <Route path={'addproduct'} element={<AddProduct></AddProduct>}></Route>
        <Route path={'editproduct/:id'} element={<EditProduct></EditProduct>}></Route>
        <Route path={'details/:id'} element={<Details></Details>} />
        <Route path={'*'} element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
