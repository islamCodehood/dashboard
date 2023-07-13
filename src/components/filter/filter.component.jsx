import { ReactComponent as DownArrow } from './icons/down-arrow.svg';
import { ReactComponent as RightArrow } from './icons/right-arrow.svg';

const Filter = ({title, options}) => {
    return <div className="border-2 h-12 px-2 py-2 flex justify-between">
      <div className="text-[#1A1A1A]">{title}</div>
      <div className="w-6">
        <RightArrow />
      </div>
    </div>
}

export default Filter
