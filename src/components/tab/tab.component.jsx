import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Tab = ({ title, active, toggleActive, id, path }) => {
    useEffect(() => {
        console.log(active)
    }, [active])
    return (
        <Link
            to={path}
            className={`text-[#1A1A1A] font-semibold px-4 py-2  ${
                active
                    ? 'border-[2.5px] border-t-[#4830D9] border-b-0 bg-white'
                    : 'border-t-[2.5px] bg-[#F3F3F6]'
            } `}
            onClick={() => toggleActive(id)}
        >
            {title}
        </Link>
    )
}

export default Tab
