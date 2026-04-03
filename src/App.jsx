import {ToastContainer} from 'react-toastify'
import './App.css'
import Navbar from './components/navbar/Navbar'
import {Suspense, useState} from 'react'
import Hero from './components/homepage/Hero';
import Stats from './components/homepage/Stats';
import Steps from './components/homepage/Steps';
import Pricing from './components/homepage/Pricing';
import CTA from './components/homepage/CTA';
import Products from './components/homepage/products/Products';
import Footer from "./components/homepage/Footer";

const fetchProducts = async () => {
    const res = await fetch('/data.json');
    return res.json();
};


function App() {
    const productPromise = fetchProducts();
    const [cartItem, setCartItem] = useState([]);

    return (
        <>
            <Navbar cartItem={cartItem}/>
            <Hero/>
            <Stats/>
            <Suspense
                Suspense
                fallback={<div className={"w-full min-h-svh"}><span
                    className="loading loading-spinner text-primary"></span></div>}
            >
                <Products
                    productPromise={productPromise}
                    cartItem={cartItem}
                    setCartItem={setCartItem}
                />
            </Suspense>

            <Steps/>
            <Pricing/>
            <CTA/>
            <Footer/>
            <ToastContainer/>
        </>
    );
}

export default App
