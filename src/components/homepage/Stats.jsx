import React from 'react'

const Stats = () => {
  return (
    <section className='my-16 lg:my-32 flex items-center justify-center bg-linear-45 from-[#4F39F6] to-[#9514FA] '>
      <div className='stats stats-vertical lg:stats-horizontal w-full container mx-auto text-white'>
        <div className='stat place-items-center py-12'>
          <div className='stat-value'>50K+</div>
          <div className='stat-desc text-neutral-300'>Active Users</div>
        </div>

        <div className='stat place-items-center py-12'>
          <div className='stat-value'>200+</div>
          <div className='stat-desc text-neutral-300'>Premium Tools</div>
        </div>

        <div className='stat place-items-center py-12'>
          <div className='stat-value'>4.9</div>
          <div className='stat-desc text-neutral-300'>Rating</div>
        </div>
      </div>
    </section>
  );
}

export default Stats