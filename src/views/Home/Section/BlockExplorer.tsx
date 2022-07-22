import React from 'react'

const BlockExplorer = () => {
	return (
		<div className='bg-[#FFCD85] py-32'>
			<div className='container flex gap-20'>
				<div className='w-[440px] flex flex-col justify-evenly'>
					<h2>We care about usability</h2>
					<p className='main-text'>
						We’ve struggled with many cryptocurrencies to learn how to build
						Iron Fish to be intuitive for both developers and users alike. We
						are building a complete set of tools for you to have the best
						end-to-end experience running and transacting $IRON on every
						platform, while always guaranteeing your privacy.
					</p>
					<button className='px-[30px] py-5 text-white bg-black rounded-full w-fit text-xl font-normal'>
						Download CLI
					</button>
				</div>
				<img src='/assets/image/block-explorer.png' alt='block-explorer' className='w-[585px] h-full'/>
			</div>
		</div>
	)
}

export default BlockExplorer
