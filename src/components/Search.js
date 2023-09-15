import React from "react";

function Search( { setSearchTerm } ) {

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    return (
        <div>
            <form>
                <input onChange = {(e) => handleChange(e)} placeholder = "search term" />
            </form>
        </div>
    )

}

// export components so that files may be imported elsewhere
export default Search;