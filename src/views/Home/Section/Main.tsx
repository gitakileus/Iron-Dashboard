import React from 'react'

const Main = () => {
	return (
		<div className='relative w-full h-[915px] bg-mainback flex items-center justify-center'>
			<img
				src='/assets/image/main-background.png'
				alt='background'
				className='absolute -top-6 z-0'
			/>
      <div className='grid gap-5 z-10'>
        <h1 className='text-[80px] leading-[84px] text-center text-white'>The Private<br/>Cryptocurrency</h1>
        <button className='flex mx-auto px-7 py-3 bg-[#FFA8DE] rounded-full text-mainback'>Get Started</button>
      </div>
		</div>
	)
}

export default Main
