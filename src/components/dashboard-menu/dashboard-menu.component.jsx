import './dashboard-menu.style.css'
// import box from 'assets/icons/box.png'
const DashboardMenu = () => {
    return (
        <aside className="dashboard-side">
            <div className="flex flex-col items-center">
                <img
                    src={process.env.PUBLIC_URL + '/assets/icons/box.png'}
                    alt="icon"
                />
                <div className="text-white text-[8px] font-bold">CTIX</div>
            </div>
            <div className="grow flex flex-col gap-6">
                <div className=" p-1 rounded-sm">
                    <img
                        src={
                            process.env.PUBLIC_URL + '/assets/icons/burger.png'
                        }
                        alt="icon"
                    />
                </div>
                <div className=" p-1 rounded-sm">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            '/assets/icons/certificate.png'
                        }
                        alt="icon"
                    />
                </div>
                <div className=" p-1 rounded-sm">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            '/assets/icons/envelope.png'
                        }
                        alt="icon"
                    />
                </div>
                <div className=" p-1 rounded-sm">
                    <img
                        src={process.env.PUBLIC_URL + '/assets/icons/doc.png'}
                        alt="icon"
                    />
                </div>
                <div className=" p-1 rounded-sm">
                    <img
                        src={process.env.PUBLIC_URL + '/assets/icons/rss.png'}
                        alt="icon"
                    />
                </div>
                <div className=" p-1 rounded-sm">
                    <img
                        src={
                            process.env.PUBLIC_URL + '/assets/icons/twitter.png'
                        }
                        alt="icon"
                    />
                </div>
                <div className="bg-[#4830D9] p-1 rounded-md">
                    <img
                        src={process.env.PUBLIC_URL + '/assets/icons/data.png'}
                        alt="icon"
                    />
                </div>
                <div className=" p-1 rounded-sm">
                    <img
                        src={
                            process.env.PUBLIC_URL + '/assets/icons/report.png'
                        }
                        alt="icon"
                    />
                </div>
            </div>
            <div className="flex">
                <div>
                    {' '}
                    <img
                        src={
                            process.env.PUBLIC_URL + '/assets/icons/person.png'
                        }
                        alt="icon"
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            '/assets/icons/menu-vert.png'
                        }
                        alt="icon"
                    />
                </div>
            </div>
        </aside>
    )
}

export default DashboardMenu
