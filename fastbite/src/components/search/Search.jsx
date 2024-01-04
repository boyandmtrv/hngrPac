import { useState } from "react";

const Search = ({
    query,
    setQuery,
    onSubmit
}) => {

    const [maxTime, setMaxTime] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        
        onSubmit(query, maxTime);
    };

    return (
        <div className="search">
            <form className="searchForm" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder='Enter food'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                 <input
                    type="number"
                    placeholder='Time you have'
                    value={maxTime}
                    onChange={(e) => setMaxTime(e.target.value)}
                />
                <input
                    type="submit"
                    value="Search"
                />
                
            </form>
        </div>
    )
};

export default Search;