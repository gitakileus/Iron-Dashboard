import React from 'react'

const Earth = () => {
	return (
		<div className='bg-[#E5E5E5] py-32 relative h-[894px] flex items-center'>
			<div className='container flex gap-20'>
				<div className='w-[440px] grid gap-8'>
					<h2>Borderless, private banking for everyone</h2>
					<p className='main-text'>
						IRF is censorship-resistant and available to everyone—regardless of
						location, identity or citizenship. Anyone can create a wallet and be
						their own global, digital bank.
					</p>
					<button className='px-[30px] py-5 text-white bg-black rounded-full w-fit text-xl font-normal'>
						Read Our Whitepaper
					</button>
				</div>
			</div>
			<img
				src='/assets/image/earth.png'
				alt='earth'
				className='overflow-hidden z-0 -translate-y-20 ml-auto absolute right-0 top-0'
			/>
		</div>
	)
}

export default Earth
