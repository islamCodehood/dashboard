import './main.style.css'

import SideMenu from '../side-menu/side-menu.component'
import Cards from '../cards/cards.component'

const Main = () => {
    return (
        <main>
          <Cards />
          <SideMenu />
        </main>
    )
}

export default Main
