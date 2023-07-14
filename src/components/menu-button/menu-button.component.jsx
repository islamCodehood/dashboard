import { useState } from 'react'

import { ReactComponent as MenuVertical } from './icons/menu-vertical.svg'

const MenuButton = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center w-8 px-1.5 py-1 bg-white rounded-md shadow-lg"
            >
                <MenuVertical />
            </button>

            <div
                id="dropdownInformation"
                className={`${
                    open ? 'inline-block' : 'hidden'
                } absolute top-full right-full  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}
            >
                {/* <div className="px-4 py-3 text-sm text-gray-900">
                    <div>Ahmed Kamal</div>
                    <div className="font-medium truncate">ak@anyemail.com</div>
                </div> */}
                <ul
                    className="py-2 text-sm text-gray-700 "
                    aria-labelledby="dropdownInformationButton"
                >
                    <li>
                        <a
                            onClick={() => setOpen(false)}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Option-1
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setOpen(false)}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Option-2
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setOpen(false)}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Option-3
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuButton
