import ListingPreview from './ListingPreview/ListingPreview'
import './Home.css'

function Home() {
	return (
		<div className="home-page">
			<div className="heading">
				<h1 className='welcome-h1'>Welcome to the dubizzle car listings</h1>
			</div>
			<div className="heading-note">
				<h4 className='heading-note-h4'>(Cars are outdated)</h4>
			</div>
			<div className="intro-paragraph">
				<p className='intro-paragraph-text'>
					Here you can find a list of cars for sale. You can browse
					through the listings and add cars to your favourites. We
					have a wide range of cars available, so you are sure to find
					something that suits your needs. Please note that the cars
					listed here are not up to date. And this is a demo project
					for learning purposes.
				</p>
				<p className="enjoy">Enjoy browsing!</p>
			</div>
			<ListingPreview />
		</div>
	)
}

export default Home
