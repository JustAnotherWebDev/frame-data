import characters from "../assets/characters.json"

const CharacterSelect = props => {
  const { setCharacter } = props
  return (
    <main className="character-select">
      {characters.map(character => (
        <img
          key={character}
          src={`src/assets/portraits/${character}.png`}
          alt={character}
          onClick={() => setCharacter(character)}
        />
      ))}
    </main>
  )
}

export default CharacterSelect
