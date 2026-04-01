import { Package, Rocket, User } from 'lucide-react';
import React from 'react'

const CTA = () => {
  return (
    <section className='bg-linear-45 from-[#4F39F6] to-[#9514FA] py-16 text-white'>
      <div className='min-h-screen container mx-auto w-full p-4 flex flex-col items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-extrabold'>
            Ready to Transform Your Workflow?
          </h1>
          <p className='py-6'>
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 items-center justify-center w-full mt-8'>
          <button className='btn rounded-full text-primary bg-white hover:opacity-90'>
            Explore Products
          </button>
          <button className='btn rounded-full text-white btn-outline hover:opacity-90'>
            View Pricing
          </button>
        </div>
        <p className='py-6 text-center'>
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default CTA