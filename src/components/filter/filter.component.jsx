// import { ReactComponent as DownArrow } from './icons/down-arrow.svg'
import { ReactComponent as RightArrow } from './icons/right-arrow.svg'
import { useEffect } from 'react'

const Filter = ({ title, options, toggleOpen, open, id }) => {

    return (
        <div
            onClick={() => toggleOpen(id)}
            className={`border-2  py-2 h-12 overflow-y-hidden duration-500 ${
                open ? ' h-[250px]' : 'h-12'
            }`}
        >
            <div className=" flex justify-between mb-4 px-2">
                <div className="text-[#1A1A1A]">{title}</div>
                <button
                    className={`w-6 duration-200 ${
                        open ? 'rotate-90' : 'rotate-0'
                    }`}
                >
                    <RightArrow />
                </button>
            </div>
            <div className="px-3 border-b-2 py-1.5 mb-3">
                <label className="">
                    <input type="checkbox" name="" value="Select All" />
                    <span className="ml-2">Select All</span>
                </label>
            </div>
            <ul className={`styled-scrollbar duration-500  ${open ? "h-[150px] overflow-y-auto" : "h-0"}`}>
                {options.map((option, idx) => (
                    <li key={idx} className="px-3">
                        <label className="">
                            <input
                                type="checkbox"
                                name=""
                                value={option.title}
                            />
                            <span className="ml-2">{option.title}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Filter
