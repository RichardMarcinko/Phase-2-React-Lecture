import React, { useState } from "react";

function CharacterCard( {name, image, quote, isHappy} ) {

    const [isUpperCase, setIsUpperCase] = useState(false)

    /*
        render a div with each character's info - class happy or sad
        render image within
        render quote in h2
        render name in h1
    */

    /*
        when you click each character's image,
        it should toggle the character's name between upper and lower
    */

    function switchCaps() {
        setIsUpperCase(!isUpperCase)

        /*
        if (isUpperCase == true) {
            setIsUpperCase(false)
        }
        else {
            setIsUpperCase(true)
        }
        */
    }

    return (
        <div className = {isHappy ? "happy" : "sad"} >
            <h1>{isUpperCase ? name.toUpperCase() : name.toLowerCase()}</h1>
            <img onClick = {switchCaps} src = {image} alt = {name} />
            <h2>{quote}</h2>
        </div>
    )

    if (isHappy == true) {
        if (isUpperCase == true) {
            return (
            <div className = "happy" >
                <h1>{name.toUpperCase()}</h1>
                <img onClick = {switchCaps} src = {image} alt = {name} />
                <h2>{quote}</h2>
            </div>
            )
        }
        else {
            return (
            <div className = "happy" >
                <h1>{name.toLowerCase()}</h1>
                <img onClick = {switchCaps} src = {image} alt = {name} />
                <h2>{quote}</h2>
            </div>
            )
        }
    }
    else {
        if (isUpperCase == true) {
            return (
            <div className = "sad" >
                <h1>{name.toUpperCase()}</h1>
                <img onClick = {switchCaps} src = {image} alt = {name} />
                <h2>{quote}</h2>
            </div>
            )
        }
        else {
            return (
            <div className = "sad" >
                <h1>{name.toLowerCase()}</h1>
                <img onClick = {switchCaps} src = {image} alt = {name} />
                <h2>{quote}</h2>
            </div>
            )
        }
    }
}

export default CharacterCard;