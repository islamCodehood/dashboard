import './nav.style.css'
import { ReactComponent as DownArrow } from './icons/down-arrow.svg'
import { ReactComponent as MenuVertical } from './icons/menu-vertical.svg'
import MenuButton from '../menu-button/menu-button.component'

const Nav = () => {
    return (
        <nav className="flex justify-between">
            <div className="flex gap-6">
                <h2 className="text-[#1A1A1A] text-xl font-bold">
                    ATT&CK Navigator
                </h2>
                <button className="flex justify-between items-center w-28 px-1.5 py-1 bg-white rounded-md shadow-lg font-semibold text-[#1A1A1A]">
                    Enterprise{' '}
                    <span className="w-5">
                        <DownArrow />
                    </span>
                </button>
            </div>
            <MenuButton />

        </nav>
    )
}

export default Nav
