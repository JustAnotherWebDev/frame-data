import { useState } from "react"

const Navbar = props => {
  const {
    character,
    setCharacter,
    hasDelay,
    setDelay,
    hasNotation,
    setNotation,
  } = props
  const [previous, setPrevious] = useState(null)
  return (
    <nav>
      {!character && (
        <>
          <a
            className={`${!character ? "patreon" : "patreon hidden"}`}
            href="https://patreon.com"
          ></a>
          <h1 className={`${!character ? "header" : "header hidden"}`}>
            Frame Data
          </h1>
        </>
      )}
      <div className="menu">
        <i
          className="logo"
          onClick={() => {
            if (character) {
              setPrevious(character)
              setCharacter(null)
            } else {
              setCharacter(previous)
            }
          }}
        />
      </div>
      <div
        className={`${character ? "control-panel" : "control-panel closed"}`}
      >
        {character ? (
          <>
            <h1>{character}</h1>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
