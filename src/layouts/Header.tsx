import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from 'icons/logo.svg'
import { ReactComponent as ArrowDown } from 'icons/arrow-down.svg'
import {ReactComponent as Divider} from 'icons/divider.svg'

const Header = () => {
	return (
		<header className='z-50 fixed px-16 h-[110px] w-full flex items-center justify-between text-white'>
			<Logo />
			<div className='flex gap-9 items-center'>
				<Link to='#' className='text-xl leading-[30px]'>Get Started</Link>
				<Link to='#' className='text-xl leading-[30px]'>Whitepaper</Link>
				<Link to='#' className='text-xl leading-[30px] flex items-center gap-[10px]'>Company<ArrowDown /></Link>
        <Divider className='my-auto'/>
				<Link to='#' className='text-xl leading-[30px] flex items-center gap-[10px]'>Testnet<ArrowDown /></Link>
				<button className='px-6 py-3 border-solid border-white border-2 rounded-full text-xl leading-[30px]'>Testnet Login</button>
			</div>
		</header>
	)
}

export default Header
