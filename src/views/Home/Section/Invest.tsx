import React from 'react'

const Invest = () => {
	return (
		<div className='bg-[#E5E5E5] py-32'>
			<div className='container flex gap-20'>
				<div className='w-min-[440px] grid gap-8'>
					<h2>Built by experts and backed by leading investors</h2>
					<p className='main-text'>
						We are honored to be working with incredible investors and angels.
						Our team members are tech veterans, with resumes spanning Airbnb,
						Facebook, Uber, and more.
					</p>
					<button className='px-[30px] py-5 text-white bg-black rounded-full w-fit text-xl font-normal'>
						About Us
					</button>
				</div>
				<img
					src='/assets/image/invest.png'
					alt='invest'
					className='w-[646px] h-full'
				/>
			</div>
		</div>
	)
}

export default Invest
