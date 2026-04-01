import { Package, Rocket, User } from 'lucide-react';
import React from 'react';

const Pricing = () => {
  return (
    <section className='bg-base-100 py-16'>
      <div className='min-h-screen container mx-auto w-full p-4 flex flex-col items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-extrabold'>
            Simple, Transparent Pricing
          </h1>
          <p className='py-6 text-neutral-500'>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 items-stretch justify-center w-full'>
          <div className='card w-full bg-base-100 shadow-sm'>
            <div className='card-body flex flex-col gap-6 justify-between'>
              <div className='flex flex-col gap-6 justify-between'>
                <div>
                  <h2 className='text-xl font-bold'>Starter</h2>
                  <p className='text-neutral-500'>
                    Perfect for getting started
                  </p>
                </div>
                <span className='text-xl text-neutral-500'>
                  <span className='font-bold text-3xl text-black'>$0</span>
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
                    <span>Access to 10 free tools</span>
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
                    <span>Basic templates</span>
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
                    <span>Community support</span>
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
                    <span>1 project per month</span>
                  </li>
                </ul>
              </div>
              <button className='btn btn-primary btn-block rounded-full bg-linear-45 from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-300'>
                Get Started Free
              </button>
            </div>
          </div>
          <div className='relative card w-full bg-linear-45 from-[#4F39F6] to-[#9514FA] shadow-sm text-white'>
            <span className='badge badge-soft badge-sm badge-warning -top-2 flex items-center absolute left-1/2 -translate-x-1/2'>
              Most Popular
            </span>
            <div className='card-body flex flex-col gap-6 justify-between'>
              <div className='flex flex-col gap-6 justify-between'>
                <div className=''>
                  <h2 className='text-xl font-bold'>Pro</h2>
                  <p className='text-neutral-200'>Best for professionals</p>
                </div>
                <span className='text-xl'>
                  <span className='font-bold text-3xl'>$29</span>
                  /Month
                </span>
                <ul className='flex flex-col gap-2 text-xs'>
                  <li>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4 me-2 inline-block text-white'
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
                    <span>Access to all premium tools</span>
                  </li>
                  <li>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4 me-2 inline-block text-white'
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
                    <span>Unlimited templates</span>
                  </li>
                  <li>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4 me-2 inline-block text-white'
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
                    <span>Priority support</span>
                  </li>
                  <li>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4 me-2 inline-block text-white'
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
                    <span>Unlimited projects</span>
                  </li>
                  <li>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4 me-2 inline-block text-white'
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
                    <span>Cloud sync</span>
                  </li>
                  <li>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-4 me-2 inline-block text-white'
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
                    <span>Advanced analytics</span>
                  </li>
                </ul>
              </div>
              <button className='btn btn-primary btn-block rounded-full hover:opacity-90 transition-opacity duration-300 bg-white text-primary'>
                Start Pro Trial
              </button>
            </div>
          </div>
          <div className='card w-full bg-base-100 shadow-sm'>
            <div className='card-body flex flex-col gap-6 justify-between'>
              <div className='flex flex-col gap-6 justify-between'>
                <div className=''>
                  <h2 className='text-xl font-bold'>Enterprise</h2>
                  <p className='text-neutral-500'>For teams and businesses</p>
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
                    <span>Everything in Pro</span>
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
                    <span>Team collaboration</span>
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
                    <span>Custom integrations</span>
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
                    <span>Dedicated support</span>
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
                    <span>SLA guarantee</span>
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
                    <span>Custom branding</span>
                  </li>
                </ul>
              </div>
              <button className='btn btn-primary btn-block rounded-full bg-linear-45 from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-300'>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
