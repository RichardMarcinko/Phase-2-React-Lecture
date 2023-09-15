import React, { useState, useEffect } from "react";

// import necessary components from files
import Search from "./Search";
import Characters from "./Characters";

function App() {

    const [charArr, setCharArr] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    let [count, setCount] = useState(0) // strictly for demoing `useEffect` hook

    useEffect(() => {
        fetch("http://localhost:8004/characters")
            .then((resp) => resp.json())
            .then((data) => setCharArr(data))
    }, [])

    return (
        <>
            <>
                <h2 onClick = {(e) => setCount(count += 1)}>character display</h2>
            </>
            <>
                <Search setSearchTerm = {setSearchTerm} />
                <br />
                <br />
                {charArr.length > 0 ? <Characters characters = {charArr} searchTerm = {searchTerm} /> : undefined }
            </>
        </>
    )
}

// export components so that files may be imported elsewhere
export default App;