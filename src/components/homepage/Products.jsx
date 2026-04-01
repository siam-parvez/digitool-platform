import { Package, Rocket, RocketIcon, User } from 'lucide-react';
import React from 'react';

const Products = ({ productPromise, cartItemCount, setCartItemCount }) => {
  return (
    <section className='py-16'>
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
            className='btn btn-primary rounded-full bg-linear-45 from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-300 min-w-24'>
            Products
          </button>
          <button
            id='cart-btn'
            className='btn btn-ghost rounded-full hover:opacity-90 transition-opacity duration-300 min-w-24'>
            Cart {cartItemCount > 0 && <span>{cartItemCount}</span>}
          </button>
        </div>
        <div className='grid grid-cols-3 w-full'>
          <div className='card w-full bg-base-100 shadow-sm relative'>
            <div className='absolute top-2 right-2 badge badge-soft badge-warning'>
              Best Seller
            </div>
            <div className='card-body flex flex-col gap-6 justify-between'>
              <div className='flex flex-col gap-6 justify-between'>
                <div className='space-y-6'>
                  <div className='flex items-center justify-center size-12 border border-neutral-200 rounded-full'>
                    <RocketIcon />
                  </div>
                  <h2 className='text-xl font-bold'>AI Writing Pro</h2>
                  <p className='text-neutral-500'>
                    Generate high-quality content, blogs, and marketing copy in
                    seconds with advanced AI.
                  </p>
                </div>
                <span className='text-xl text-neutral-500'>
                  <span className='font-bold text-3xl text-black'>$99</span>
                  /Month
                </span>
                <ul className='flex flex-col gap-2 text-xs'>
                  <li>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4 me-2 inline-block text-success'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Unlimited AI generations</span>
                  </li>
                  <li>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4 me-2 inline-block text-success'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>50+ writing templates</span>
                  </li>
                  <li>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4 me-2 inline-block text-success'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Grammar checker</span>
                  </li>
                </ul>
              </div>
              <button className='btn btn-primary btn-block rounded-full bg-linear-45 from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-300'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
