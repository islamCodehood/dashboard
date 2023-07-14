import Filter from '../filter/filter.component'
import { useEffect, useState } from 'react'

const filterItems = [
    {
        open: false,
        id: '1',
        title: 'Sources',
        options: [
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
            { title: 'Source 5' },
            { title: 'Source 6' },
            { title: 'Source 7' },
            { title: 'Source 8' },
            { title: 'Source 9' },
            { title: 'Source 10' },
            { title: 'Source 11' },
            { title: 'Source 12' },
        ],
    },
    {
        open: false,
        id: '2',
        title: 'System Created Date',
        options: [
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        open: false,
        id: '3',
        title: 'System Modified Date',
        options: [
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        open: false,
        id: '4',
        title: 'Platforms',
        options: [
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        open: false,
        id: '5',
        title: 'Mire Threat Actors',
        options: [
            { title: 'APT29' },
            { title: 'Lazarus Group' },
            { title: 'APT23' },
            { title: 'kimsuky' },
            { title: 'APT32' },
            { title: 'Magic Hound' },
            { title: 'Sandworm Team' },
            { title: 'Turla' },
        ],
    },
    {
        open: false,
        id: '6',
        title: 'Softwares',
        options: [
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        open: false,
        id: '7',
        title: 'Log Data Sources',
        options: [
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        open: false,
        id: '8',
        title: 'Mitigations',
        options: [
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
]

const Filters = () => {
    const [filters, setFilters] = useState(filterItems)
    const toggleOpen = (id) => {
        console.log(id)
        const newFilters = filters.map((filterItem) => {
            if (filterItem.id === id && !filterItem.open ) {
                return { ...filterItem, open: true }
            }
            return { ...filterItem, open: false }
        })
        setFilters(newFilters)
    }

    return (
        <ul className="flex flex-col gap-2">
            {filters.map((item) => (
                <li key={item.id}>
                    <Filter toggleOpen={toggleOpen} {...item} />
                </li>
            ))}
        </ul>
    )
}

export default Filters
