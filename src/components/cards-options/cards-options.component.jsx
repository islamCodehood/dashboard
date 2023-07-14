import { ReactComponent as Fire } from './icons/fire.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as Triangle } from './icons/triangle.svg'
import { ReactComponent as FilterIcon } from './icons/filter-list.svg'
import { ReactComponent as Expand } from './icons/expand.svg'

const CardsOptions = () => {
    return (
        <div className="flex justify-end items-center w-full gap-6">
            <div className="w-5">
                <Fire />
            </div>
            <div className="flex">
                <button className="flex items-center justify-between gap-2 border-2 py-1 px-2 text-[#8E83E4] text-sm font-semibold">
                    Count by
                    <div className="w-5 rotate-45">
                        <Triangle />
                    </div>
                </button>
                <button className="flex items-center justify-between gap-2 border-2 border-l-0 py-1 px-2 text-[#8E83E4] text-sm font-semibold">
                    <div className="w-5">
                        <FilterIcon />
                    </div>
                </button>
            </div>
            <button className="flex items-center justify-between gap-2 rounded-md py-1 px-2 text-[#8E83E4] text-sm font-semibold">
                <div className="w-5">
                    <Expand />
                </div>
                Expand Sub-technique
            </button>
            <button className="flex items-center justify-between gap-2 border-2 border-[#8E83E4] rounded-md py-1 px-2 text-[#8E83E4] text-sm font-semibold">
                <div className="w-4">
                    <PlusIcon />
                </div>
                Add Custom Technique
            </button>
        </div>
    )
}

export default CardsOptions
