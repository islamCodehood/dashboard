import { useState } from 'react'
import './dashboard-menu.style.css'
import DashboardMenuButton from '../dashboard-menu-button/dashboard-menu-button.component'
import { ReactComponent as Burger } from './icons/burger.svg'
import { ReactComponent as Certificate } from './icons/certificate.svg'
import { ReactComponent as Envelope } from './icons/envelope.svg'
import { ReactComponent as Doc } from './icons/doc.svg'
import { ReactComponent as Rss } from './icons/rss.svg'
import { ReactComponent as Twitter } from './icons/twitter.svg'
import { ReactComponent as Data } from './icons/data.svg'
import { ReactComponent as Report } from './icons/report.svg'


const iconsList = [
    {
        id: "1",
        path: <Burger /> ,
        active: true,
    },
    {
        id: "2",
        path: <Certificate /> ,
        active: false,
    },
    {
        id: "3",
        path: <Envelope /> ,
        active: false,
    },
    {
        id: "4",
        path: <Doc /> ,
        active: false,
    },
    {
        id: "5",
        path: <Rss />,
        active: false,
    },
    {
        id: "6",
        path: <Twitter />,
        active: false,
    },
    {
        id: "7",
        path: <Data />,
        active: false,
    },
    {
        id: "8",
        path: <Report />,
        active: false,
    },
]
const DashboardMenu = () => {

    const [icons, setIcons] = useState(iconsList)
    const toggleActiveIcon = (id) => {
        const newIcons = icons.map((icon) => {
            if (icon.id === id) {
                return { ...icon, active: true }
            }
            return { ...icon, active: false }
        })
        setIcons(newIcons)
    }
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
                {
                    icons.map((icon, idx) => 
                    <DashboardMenuButton key={idx} {...icon} toggleActiveIcon={toggleActiveIcon} />
                    )
                }
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
