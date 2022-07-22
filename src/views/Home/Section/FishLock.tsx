import React from 'react'

const FishLock = () => {
	return (
		<div className='bg-[#E5E5E5] py-32'>
			<div className='container flex gap-20'>
				<div className='w-[440px] grid gap-8'>
					<h2>A new chain with the strongest privacy </h2>
					<p className='main-text'>
						Most payments are now digital, and the need for financial privacy
						and digital cash is more important than ever. Iron Fish is a Layer 1
						blockchain that provides the strongest privacy guarantees on every
						single transaction, based on a variation of the Sapling protocol,
						leveraging zero-knowledge proofs (zk-SNARKs), and the highest
						industry standards for encryption. Iron Fish gives you complete
						control over who sees transaction details via account view keys or
						transaction decryption keys. Your data. Your information. Your
						coins.
					</p>
          <button className='px-[30px] py-5 text-white bg-black rounded-full w-fit text-xl font-normal'>Features Comparison</button>
				</div>
        <img src="/assets/image/fish-lock.png" alt="fish-lock" />
			</div>
		</div>
	)
}

export default FishLock
