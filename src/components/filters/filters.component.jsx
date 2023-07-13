import Filter from '../filter/filter.component'
import { useState } from 'react'

const filterItems = [
    {
        id: '1',
        title: 'Sources',
        options: [
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        id: '2',
        title: 'System Created Date',
        options: [
            { title: 'Select All' },
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        id: '3',
        title: 'System Modified Date',
        options: [
            { title: 'Select All' },
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        id: '4',
        title: 'Platforms',
        options: [
            { title: 'Select All' },
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        id: '5',
        title: 'Mire Threat Actors',
        options: [
            { title: 'Select All' },
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
        id: '6',
        title: 'Softwares',
        options: [
            { title: 'Select All' },
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        id: '7',
        title: 'Log Data Sources',
        options: [
            { title: 'Select All' },
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
    {
        id: '8',
        title: 'Mitigations',
        options: [
            { title: 'Select All' },
            { title: 'Source 1' },
            { title: 'Source 2' },
            { title: 'Source 3' },
            { title: 'Source 4' },
        ],
    },
]
console.log(filterItems)

const Filters = () => {
    const [filters, setFilters] = useState(filterItems)
    return (
        <ul className="flex flex-col gap-2">
            {filterItems.map((item) => (
                <li key={item.id}>
                    <Filter {...item} />
                </li>
            ))}
        </ul>
    )
}

export default Filters
