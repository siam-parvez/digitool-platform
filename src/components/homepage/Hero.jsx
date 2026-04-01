import React from 'react'
import heroImg from '../../assets/banner.png';
import { Circle, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className='bg-base-100'>
      <div className='hero min-h-screen container mx-auto'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={heroImg} className='rounded-lg border border-neutral-100' />
          <div className='space-y-2 lg:space-y-3'>
            <div className='badge badge-soft badge-primary rounded-full'>
              <Circle className='size-3 bg-purple-400 rounded-full' />
              New: AI-Powered Tools Available
            </div>
            <h1 className='text-2xl lg:text-5xl font-extrabold'>
              Supercharge Your Digital Workflow
            </h1>
            <p className='py-6 text-neutral-500 text-sm lg:text-base'>
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className='flex gap-2'>
              <button className='btn btn-primary rounded-full bg-linear-45 from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-300'>
                Explore Products
              </button>
              <button className='btn btn-outline rounded-full hover:opacity-90 transition-all duration-300 btn-primary'>
                <Play className='size-5' /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero