import Filters from '../filters/filters.component'
import './side-menu.style.css'

const SideMenu = () => {
    return <aside className="side_menu">
        <h2>Filter</h2>
        <div>
            <Filters />
        </div>
    </aside>
}

export default SideMenu
