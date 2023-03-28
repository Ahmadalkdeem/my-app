import React, { useEffect } from 'react';
import './App.css';
import MyNavbar from './components/Navbar2/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import MyCard from './components/card/Card';
import Reactselect from './components/Reactselect/Reactselect';
import Uplodefile from './components/Uplodefile/Uplodefile';
import Editcard from './components/Edidcard/Editcard';
import Mycart from './components/mycart/Mycart';
import Cardlist from './components/cards/Cardlist';
import Cardlist2 from './components/cardlist2/Cardlist';
import Page from './components/pagecard/Page';
import Editpage from './components/Editpage/Editpage ';
import Bootstrapform from './components/logandsinin/Bootstrapform';
import Shose from './components/shoselist/Shose';
import Pants from './components/pantslist/Pants';
import Shirt from './components/Shirtslist/shirts';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchUsers } from './features/cards/cardshirts';
import { fetchUsers2 } from './features/cards/cardPants';
import { fetchUsers3 } from './features/cards/cardshose';
import About from './components/about/About';
function App() {
  let Dispatch = useAppDispatch()
  useEffect(() => {
    Dispatch(fetchUsers())
    Dispatch(fetchUsers2())
    Dispatch(fetchUsers3())
    // getData();

  }, []);
  return (
    <>
      <MyNavbar />

      <Routes >
        <Route path='/' element={<Cardlist />} />
        <Route path='/home' element={<Cardlist />} />
        <Route path='/connection' element={<Bootstrapform />} />
        <Route path='/about' element={<About />} />
        <Route path='/Mycard' element={<Mycart />} />
        <Route path='/shoes' element={<Shose />} />
        <Route path='/Shirts' element={<Shirt />} />
        <Route path='/pants' element={<Pants />} />
        <Route path='/:fcatgre/:scatgre/:id' element={<Page />} />
        <Route path='/addproduct' element={<Editpage />} />
      </Routes>
    </>
  );
}

export default App;
