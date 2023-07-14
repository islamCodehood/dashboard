import './main.style.css'

import SideMenu from '../side-menu/side-menu.component'
import Cards from '../cards/cards.component'
import Tabs from '../tabs/tabs.component'
import Search from '../search/search.component'
import CardsOptions from '../cards-options/cards-options.component'
import { Routes, Route } from 'react-router-dom'
import Charts from '../charts/charts'

const Main = () => {
    return (
        <main>
            <SideMenu />
            <div className="options-wrapper">
                <Tabs />
                <Search />
            </div>
            <div className="cards-options-wrapper">
                <CardsOptions />
            </div>
            <Routes>
                <Route path="/" element={<Cards  />} />
				<Route path="/charts" element={<Charts />} />
            </Routes>
        </main>
    )
}

export default Main
