import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
    // Ye Query String h
    // usesearchpam humhy current url jo hota h ose hmre state searchparam mai store krta h.

    const [searchparams, setSearchParams] = useSearchParams();
    
    const handleSearch = (e) => {
        // ye page ko reload hone e rukhta h
        e.preventDefault();
        // alert(searchparams.get("q"));
        const data = searchparams.get('q');
        const age = searchparams.get('age');
        alert(data + " " + age);

    }
    return (
        <div>
            <h1>This is a Search Page</h1>

            <form>
                <label>Search :</label>
                {/* meri value store hogi searchparam mai o wo mujy show kre ga mere url mai..q ki jaga kuch b likh skhty hn */}
                <input type='text' placeholder='Search' onChange={(e) => setSearchParams({ q: e.target.value })} />
                <br /><b />
                <button type='submit' value='search' onClick={handleSearch}>Search</button>
                <button type='submit' value='reset' onClick={()=>setSearchParams({})}>reset</button>

        
            </form>
        </div>
    )
}

export default Search
