import './search.style.css'
const Search = () => {
    return (
        <div>
            <label className="search">
                <input
                    className="border-2 rounded-md h-9 w-[420px] p-2"
                    type="text"
                    placeholder="Search Technique / Sub-technique"
                />
            </label>
        </div>
    )
}

export default Search
