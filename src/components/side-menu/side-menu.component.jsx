import Filters from '../filters/filters.component'
import './side-menu.style.css'

const SideMenu = () => {
    return <aside className="side_menu">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div>
            <Filters />
        </div>
    </aside>
}

export default SideMenu
