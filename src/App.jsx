import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'
import Hero from './components/homepage/Hero';
import Stats from './components/homepage/Stats';
import Steps from './components/homepage/Steps';

function App() {

  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <>
      <Navbar cartItemCount={cartItemCount} />
      <Hero />
      <Stats />
      <Steps/>
      <ToastContainer />
    </>
  );
}

export default App
