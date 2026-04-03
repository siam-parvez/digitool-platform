import {ToastContainer} from 'react-toastify'
import './App.css'
import Navbar from './components/navbar/Navbar'
import {Suspense, useState} from 'react'
import Hero from './components/homepage/Hero';
import Stats from './components/homepage/Stats';
import Steps from './components/homepage/Steps';
import Pricing from './components/homepage/Pricing';
import CTA from './components/homepage/CTA';
import Products from './components/homepage/products/Products.jsx';
import Footer from "./components/homepage/Footer.jsx";

const fetchProducts = async () => {
    const res = await fetch('/data.json');
    return res.json();
};


function App() {
    const productPromise = fetchProducts();
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartItem, setCartItem] = useState([]);

    return (
        <>
            <Navbar cartItemCount={cartItemCount}/>
            <Hero/>
            <Stats/>
            <Suspense
                fallback={<span className="loading loading-dots loading-xl"></span>}
            >
                <Products
                    productPromise={productPromise}
                    cartItem={cartItem}
                    setCartItem={setCartItem}
                    cartItemCount={cartItemCount}
                    setCartItemCount={setCartItemCount}
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
