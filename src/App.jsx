import { useState } from "react"
import ControlPanel from "./components/ControlPanel"
import List from "./components/List"
import "./components/icons.css"

function App() {
  const [character, setCharacter] = useState("Bryan")
  const [hasDelay, setDelay] = useState(false)
  const [hasNotation, setNotation] = useState(false)
  return (
    <>
      <ControlPanel
        hasDelay={hasDelay}
        setDelay={setDelay}
        hasNotation={hasNotation}
        setNotation={setNotation}
      />
      <main className="list">
        <List
          character={character}
          hasDelay={hasDelay}
          hasNotation={hasNotation}
        />
      </main>
    </>
  )
}

export default App
