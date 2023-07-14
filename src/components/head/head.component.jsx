import UserDropdown from '../user-dropdown/user-dropdown.component'
import './head.style.css'

const Head = () => {
    return (
        <div className="head">
            <div className="flex">
                <div className="">
                    <img
                        src={process.env.PUBLIC_URL + '/assets/icons/logo.png'}
                        alt="logo"
                        className="w-6"
                    />
                </div>
                <h1 className="text-xl font-semibold text-[#1A1A1A]">CYWARE</h1>
            </div>
            <div className="flex gap-6 items-center">
                <button className="border-2 border-[#8E83E4] rounded-md py-0.5 px-2 text-[#8E83E4]  font-semibold">
                    ＋New
                </button>
                <img
                    src={process.env.PUBLIC_URL + '/assets/icons/bell.png'}
                    alt="logo"
                    className="w-6 h-6"
                />
                <img
                    src={process.env.PUBLIC_URL + '/assets/icons/question.png'}
                    alt="logo"
                    className="w-7 h-7"
                />
                <UserDropdown />
            </div>
        </div>
    )
}

export default Head
