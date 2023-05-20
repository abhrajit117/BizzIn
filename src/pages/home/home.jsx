import './home.css'
import Nav from './nav.jsx'
import Search from './search.jsx'
import { NavSelector } from './navSelector'
import Swiper1 from './swiper1.jsx'
import Swiper2 from './swiper2'
const Home = () => {
    return (
        <div>

            <Nav />
            <NavSelector />
            <Search />
            <Swiper1 />
            <Swiper2 />
        </div>
    )
}

export default Home