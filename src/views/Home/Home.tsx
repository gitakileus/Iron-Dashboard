import React from 'react'
import MainLayout from 'layouts/MainLayout'
import Main from './Section/Main'
import FishLock from './Section/FishLock'

const Home = () => {
	return (
		<MainLayout title='IronDashboard'>
			<Main />
      <FishLock />
		</MainLayout>
	)
}

export default Home
