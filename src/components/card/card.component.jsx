import './card.style.css'
const Card = ({ bg, border, title, list, after, connected }) => {
    return (
        <li className="card_wrapper">
            <section className={`w-48 border-2 ${border} rounded-t-md`}>
                <div className={`p-3 ${bg} h-16`}>
                    <h3 className="text-white text-lg font-semibold leading-5">
                        {title} ({list.length})
                    </h3>
                </div>
                <ul className="text-[#1A1A1A]">
                    {list.map((item, idx) => (
                        <li
                            key={idx}
                            className={`relative mb-1 px-3 py-2 odd:bg-gray-200 text-sm font-semibold connector ${
                                item.connected ? after : ''
                            }`}
                        >
                            {/*  */}
                            {item.title}
                        </li>
                    ))}
                </ul>
            </section>
        </li>
    )
}

export default Card
