import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import VegetablesList from './components/VegetablesList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import About from './pages/AboutUsPage.js/AboutUsPage'; // Import the About component
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const App: React.FC = () => (
  <Router>
    <div>
      <Header />
      <div style={{minHeight: '90vh'}}>
      <Routes> 
        <Route path="/" element={
          <>
            <ImageSlider />
            <Cart />
            <hr />
            <VegetablesList />
          </>
        } />
        <Route path="/about" element={<About />} /> 
        <Route path="/error" element={<NotFoundPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
      </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
