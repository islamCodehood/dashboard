import { useState } from 'react'
import Card from '../card/card.component'
import './cards.style.css'
const cardsList = [
    {
        id: '1',
        title: 'Reconnaissance',
        list: [
            { title: 'Active Scanning', connected: true },
            { title: 'Gather Victim Host Information', connected: true },
            { title: 'Gather Victim Identity Information', connected: true },
            { title: 'Gather Victim Network Information', connected: true },
            { title: 'Gather Victim Org Information', connected: true },
            { title: 'Phishing For Information', connected: true },
            { title: 'Search Closed Source', connected: true },
            { title: 'Search Open Technical Databases', connected: true },
            { title: 'Search Open Websites/Domains', connected: true },
            { title: 'Search Victim-Owned Websites', connected: false },
        ],
        bg: 'bg-[#5248D3]',
        border: 'border-[#5248D3]',
        after: 'after:bg-[#5248D3]',
    },
    {
        id: '2',
        title: 'Resource Development',
        list: [
            { title: 'Acquire Infrastructure', connected: true  },
            { title: 'Compromise Accounts', connected: true  },
            { title: 'Compromise Infrastructure', connected: true  },
            { title: 'Develop Capabilities', connected: true  },
            { title: 'Establish Accounts', connected: true  },
            { title: 'Obtain Capabilities', connected: true  },
            { title: 'Stage Capabilities', connected: true  },
            { title: 'Acquire Access', connected: false  },
        ],
        bg: 'bg-[#0067CE]',
        border: 'border-[#0067CE]',
        after: 'after:bg-[#0067CE]',
    },
    {
        id: '3',
        title: 'Reconnaissance',
        list: [
            { title: 'Drive By Compromise' },
            { title: 'Gather Victim Host Information' },
            { title: 'Gather Victim Identity Information' },
            { title: 'Gather Victim Network Information' },
            { title: 'Gather Victim Org Information' },
            { title: 'Phishing For Information' },
            { title: 'Search Closed Source' },
            { title: 'Search Open Technical Databases', connected: true  },
            { title: 'Search Open Websites/Domains' },
            { title: 'Search Victim-Owned Websites', connected: true  },
        ],
        bg: 'bg-[#02918B]',
        border: 'border-[#02918B]',
        after: 'after:bg-[#02918B]',
    },
    {
        id: '4',
        title: 'Reconnaissance',
        list: [
            { title: 'Active Scanning', connected: true  },
            { title: 'Gather Victim Host Information' },
            { title: 'Gather Victim Identity Information' },
            { title: 'Gather Victim Network Information' },
            { title: 'Gather Victim Org Information', connected: true  },
            { title: 'Phishing For Information', connected: true  },
            { title: 'Search Closed Source' },
            { title: 'Search Open Technical Databases' },
            { title: 'Search Open Websites/Domains', connected: true  },
            { title: 'Search Victim-Owned Websites' },
        ],
        bg: 'bg-[#018D5A]',
        border: 'border-[#018D5A]',
        after: 'after:bg-[#018D5A]',
    },
    {
        id: '5',
        title: 'Reconnaissance',
        list: [
            { title: 'Active Scanning', connected: true  },
            { title: 'Gather Victim Host Information' },
            { title: 'Gather Victim Identity Information' },
            { title: 'Gather Victim Network Information', connected: true  },
            { title: 'Gather Victim Org Information' },
            { title: 'Phishing For Information', connected: true  },
            { title: 'Search Closed Source' },
            { title: 'Search Open Technical Databases' },
            { title: 'Search Open Websites/Domains' },
            { title: 'Search Victim-Owned Websites', connected: true  },
        ],
        bg: 'bg-[#DCA227]',
        border: 'border-[#DCA227]',
        after: 'after:bg-[#DCA227]',
    },
    {
        id: '6',
        title: 'Reconnaissance',
        list: [
            { title: 'Active Scanning', connected: true  },
            { title: 'Gather Victim Host Information' },
            { title: 'Gather Victim Identity Information' },
            { title: 'Gather Victim Network Information' },
            { title: 'Gather Victim Org Information' },
            { title: 'Phishing For Information' },
            { title: 'Search Closed Source', connected: true  },
            { title: 'Search Open Technical Databases', connected: true  },
            { title: 'Search Open Websites/Domains' },
            { title: 'Search Victim-Owned Websites' },
        ],
        bg: 'bg-[#FC4F36]',
        border: 'border-[#FC4F36]',
        after: 'after:bg-[#FC4F36]',
    },
    {
        id: '7',
        title: 'Reconnaissance',
        list: [
            { title: 'Active Scanning' },
            { title: 'Gather Victim Host Information' },
            { title: 'Gather Victim Identity Information', connected: true  },
            { title: 'Gather Victim Network Information', connected: true  },
            { title: 'Gather Victim Org Information', connected: true  },
            { title: 'Phishing For Information' },
            { title: 'Search Closed Source' },
            { title: 'Search Open Technical Databases' },
            { title: 'Search Open Websites/Domains' },
            { title: 'Search Victim-Owned Websites', connected: true  },
        ],
        bg: 'bg-[#F56C23]',
        border: 'border-[#F56C23]',
        after: 'after:bg-[#F56C23]',
    },
    {
        id: '8',
        title: 'Reconnaissance',
        list: [
            { title: 'Active Scanning' },
            { title: 'Gather Victim Host Information', connected: true  },
            { title: 'Gather Victim Identity Information' },
            { title: 'Gather Victim Network Information', connected: true  },
            { title: 'Gather Victim Org Information', connected: true  },
            { title: 'Phishing For Information', connected: true  },
            { title: 'Search Closed Source' },
            { title: 'Search Open Technical Databases' },
            { title: 'Search Open Websites/Domains' },
            { title: 'Search Victim-Owned Websites', connected: true  },
        ],
        bg: 'bg-[#026B6B]',
        border: 'border-[#026B6B]',
        after: 'after:bg-[#026B6B]',
    },
]
const Cards = () => {
    const [cards, setCards] = useState(cardsList)
    return (
        <div className="cards styled-scrollbar">
            <ul className="flex gap-4 overflow-x-auto">
                {cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </ul>
        </div>
    )
}

export default Cards
