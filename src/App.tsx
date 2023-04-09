import React, { useEffect } from 'react';
import './App.css';
import MyNavbar from './components/Navbar2/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Mycart from './components/mycart/Mycart';
import Cardlist from './components/cards/Cardlist';
import Page from './components/pagecard/Page';
import Editpage from './components/Editpage/Editpage ';
import Bootstrapform from './components/logandsinin/Bootstrapform';
import Shose from './components/shoselist/Shose';
import Pants from './components/pantslist/Pants';
import Shirt from './components/Shirtslist/shirts';
import { useAppDispatch } from './app/hooks';
import { fetchUsers } from './features/cards/cardshirts';
import { fetchUsers2 } from './features/cards/cardPants';
import { fetchUsers3 } from './features/cards/cardshose';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Editeproduct from './components/Editeproduct/Editeproduct';
import Order from './components/orders/Order';
import Orderdetales from './components/orderdetales/Orderdetales';
import Login from './components/logandsinin/Login';
import Signup from './components/logandsinin/Signup';
import Myslider from './components/slider/Slider';
import Navbarr from './components/navbar/Navbar';
function App() {
  let Dispatch = useAppDispatch()
  useEffect(() => {
    Dispatch(fetchUsers())
    Dispatch(fetchUsers2())
    Dispatch(fetchUsers3())

  }, []);
  return (
    <>
      <MyNavbar />
      <Routes >
        <Route path='/' element={<Cardlist />} />
        <Route path='/home' element={<Cardlist />} />
        <Route path='/connection' element={<Bootstrapform />} >
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/Mycard' element={<Mycart />} />
        <Route path='/shoes' element={<Shose />} />
        <Route path='/Shirts' element={<Shirt />} />
        <Route path='/pants' element={<Pants />} />
        <Route path='/:fcategory/:scategory/:id' element={<Page />} />
        <Route path='/orders' element={<Order />}>
          <Route path='detales/:id' element={<Orderdetales />} />
        </Route>
        <Route path='/addproduct' element={<Editpage />} />
        <Route path='/Editeproduct/:category/:id' element={<Editeproduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
