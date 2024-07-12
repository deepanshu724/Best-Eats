// App.jsx
import React from 'react';
import Hero from './components/Herosection.jsx';
import Navbar from './components/navbar.jsx';
import HeadlineCards from './components/HeadlineCards.jsx';
import Food from './components/food.jsx';
import Category from './components/category.jsx';
function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Hero />
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
