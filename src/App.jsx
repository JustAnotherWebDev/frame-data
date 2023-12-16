import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import MoveList from "./components/MoveList"
import CharacterSelect from "./components/CharacterSelect"

function App() {
  const [character, setCharacter] = useState("Bryan")
  const [hasDelay, setDelay] = useState(false)
  const [hasNotation, setNotation] = useState(false)

  return (
    <>
      <Navbar
        character={character}
        setCharacter={setCharacter}
        hasDelay={hasDelay}
        setDelay={setDelay}
        hasNotation={hasNotation}
        setNotation={setNotation}
      />
      {!character ? (
        <CharacterSelect setCharacter={setCharacter} />
      ) : (
        <MoveList
          character={character}
          hasDelay={hasDelay}
          hasNotation={hasNotation}
        />
      )}
    </>
  )
}

export default App
