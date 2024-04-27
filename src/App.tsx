import React from 'react';
import Header from './components/Header';
import VegetablesList from './components/VegetablesList';
import Cart from './components/Cart';

const App: React.FC = () => (
  <div>
    <Header />
    <Cart />
    <hr />
    <VegetablesList />
  </div>
);

export default App;