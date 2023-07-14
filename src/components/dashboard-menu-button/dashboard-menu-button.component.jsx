import './dashboard-menu-button.style.css'

const DashboardMenuButton = ({ path, active, toggleActiveIcon, id }) => {
    return (
        <div>
            <div
                onClick={() => toggleActiveIcon(id)}
                className={`p-1 rounded-sm ${active ? 'active' : ''}`}
            >
                {/* <img
                        src={
                            process.env.PUBLIC_URL + path
                        }
                        alt="icon"
                    /> */}
                <div className="w-5 text-white ">{path}</div>
            </div>
        </div>
    )
}

export default DashboardMenuButton
