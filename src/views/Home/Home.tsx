import React from 'react'
import MainLayout from 'layouts/MainLayout'
import Main from './Section/Main'
import FishLock from './Section/FishLock'
import BlockExplorer from './Section/BlockExplorer'
import Earth from './Section/Earth'
import Search from './Section/Search'
import Invest from './Section/Invest'
import Subscribe from './Section/Subscribe'

const Home = () => {
	return (
		<MainLayout title='IronDashboard'>
			<Main />
      <FishLock />
      <BlockExplorer />
      <Earth />
      <Search />
      <Invest />
      <Subscribe />
		</MainLayout>
	)
}

export default Home
