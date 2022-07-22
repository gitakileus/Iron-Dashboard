import React from 'react'

const Search = () => {
	return (
		<div className='bg-[#FFF4E0] py-32'>
			<div className='container flex gap-20'>
				<div className='w-[440px] flex flex-col justify-evenly'>
					<h2>Regulatory compliance</h2>
					<p className='main-text'>
						Privacy doesn't mean that Iron Fish can't be compliant. Every Iron
						Fish account comes with a set of view keys allowing an exchange or
						financial organization to provide a full audit of the accounts they
						manage and complying with all their AML obligations.
					</p>
					<button className='px-[30px] py-5 text-white bg-black rounded-full w-fit text-xl font-normal'>
						Read Our Whitepaper
					</button>
				</div>
				<img
					src='/assets/image/search.png'
					alt='search'
					className='w-[607px] h-full'
				/>
			</div>
		</div>
	)
}

export default Search
