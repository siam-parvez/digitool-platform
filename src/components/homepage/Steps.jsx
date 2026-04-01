import { Package, Rocket, User } from 'lucide-react';
import React from 'react'

const Steps = () => {
  return (
    <section className='bg-base-200 py-16'>
      <div className='min-h-screen container mx-auto w-full p-4 flex flex-col items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl lg:text-5xl font-extrabold'>
            Get Started in 3 Steps
          </h1>
          <p className='py-6 text-neutral-500 text-sm lg:text-base'>
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 items-center justify-center w-full'>
          <div className='card bg-base-100 w-full shadow-sm relative'>
            <div className='card-body items-center text-center py-12'>
              <div className='absolute top-3 right-3 bg-primary rounded-full size-7 text-white flex justify-center items-center'>
                01
              </div>
              <div className='rounded-full p-3 bg-primary/10 text-primary'>
                <User className='size-8' />
              </div>
              <h2 className='card-title font-bold'>Create Account</h2>
              <p className='text-neutral-500 text-sm lg:text-base'>
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          <div className='card bg-base-100 w-full shadow-sm relative'>
            <div className='card-body items-center text-center py-12'>
              <div className='absolute top-3 right-3 bg-primary rounded-full size-7 text-white flex justify-center items-center'>
                02
              </div>
              <div className='rounded-full p-3 bg-primary/10 text-primary'>
                <Package className='size-8' />
              </div>
              <h2 className='card-title font-bold'>Choose Products</h2>
              <p className='text-neutral-500 text-sm lg:text-base'>
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div className='card bg-base-100 w-full shadow-sm relative'>
            <div className='card-body items-center text-center py-12'>
              <div className='absolute top-3 right-3 bg-primary rounded-full size-7 text-white flex justify-center items-center'>
                03
              </div>
              <div className='rounded-full p-3 bg-primary/10 text-primary'>
                <Rocket className='size-8' />
              </div>
              <h2 className='card-title font-bold'>Start Creating</h2>
              <p className='text-neutral-500 text-sm lg:text-base'>
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps