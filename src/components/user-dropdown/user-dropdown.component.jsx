import { useState } from "react"

const UserDropdown = () => {

  const [open, setOpen] = useState(false)


    return (
        <div className="relative">
            <button
                id="dropdownInformationButton"
                data-dropdown-toggle="dropdownInformation"
                className="w-10 h-10 bg-[#E6E9EE] rounded-full flex justify-center items-center text-[#808893] font-semibold"
                type="button"
                onClick={() => setOpen(!open)}
            >
                AK
            </button>

            <div
                id="dropdownInformation"
                className={`${open ? "inline-block" : "hidden"} absolute top-full right-full  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}
            >
                <div className="px-4 py-3 text-sm text-gray-900">
                    <div>Ahmed Kamal</div>
                    <div className="font-medium truncate">ak@anyemail.com</div>
                </div>
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
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                        onClick={() => setOpen(false)}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Profile
                        </a>
                    </li>
                    <li>
                        <a
                        onClick={() => setOpen(false)}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Settings
                        </a>
                    </li>
                    
                </ul>
                <div className="py-2">  
                    <a
                    onClick={() => setOpen(false)}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Sign out
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UserDropdown
