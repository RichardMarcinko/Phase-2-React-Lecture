import React from "react";
import CharacterCard from "./CharacterCard";

function Characters( { characters, searchTerm } ) {

    // console.log(characters)

    const filteredChars = characters.filter((character) => {
        // if character quote contains search term or
        // character name contains search term,
        // return to filtered array
        // console.log("character's name", character.name)
        // console.log("search term", searchTerm)

        // ONE GROUP
        if (character.name.toLowerCase().includes(searchTerm.toLowerCase()) || character.quote.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true
        }
        else {
            return false
        }

        // ANOTHER GROUP
        if (character.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true
        }
        else if (character.quote.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true
        }
        else {
            return false
        }

        // ANOTHER ONE
        return character.name.toLowerCase().includes(searchTerm.toLowerCase()) || character.quote.toLowerCase().includes(searchTerm.toLowerCase())

    })

    const mappedCharCards = filteredChars.map((character) => {
        // console.log(character)
        return <CharacterCard
            key = {character.id}
            name = {character.name}
            image = {character.image}
            quote = {character.quote}
            isHappy = {character.isHappy}
        />
    })

    return (
        <>
        {mappedCharCards}
        </>
    )

}

export default Characters;