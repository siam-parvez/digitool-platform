import React, {use} from 'react';
import ProductCard from "./Product-Card.jsx";
import CartCard from "./Cart-Card.jsx";

const Products = ({productPromise, cartItemCount, setCartItemCount}) => {
    const products = use(productPromise);

    return (
        <section className='py-16' id="products">
            <div className='min-h-screen container mx-auto w-full p-4 flex flex-col items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-2xl lg:text-5xl font-extrabold'>
                        Premium Digital Tools
                    </h1>
                    <p className='py-6 text-neutral-500 text-sm lg:text-base'>
                        Choose from our curated collection of premium digital products
                        designed to boost your productivity and creativity.
                    </p>
                </div>
                <div className='border border-neutral-100 rounded-full mb-6'>
                    <button
                        id='products-btn'
                        className='btn btn-primary rounded-full border-none bg-linear-45 from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-300 min-w-24'>
                        Products
                    </button>
                    <button
                        id='cart-btn'
                        className='btn btn-ghost rounded-full hover:opacity-90 transition-opacity duration-300 min-w-24'>
                        Cart {cartItemCount > 0 && <span>{cartItemCount}</span>}
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-6'>
                    {
                        products.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product}/>
                            )
                        })
                    }

                </div>
                <div className="grid grid-cols-1 w-full gap-6">

                    <CartCard products={products}/>

                </div>
            </div>
        </section>
    );
};

export default Products;
