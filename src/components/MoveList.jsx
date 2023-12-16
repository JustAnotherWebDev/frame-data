import data from "../assets/data.json"
import Move from "./Move"

const MoveList = props => {
  const { character, hasDelay, hasNotation } = props
  const selectedCharacter = data.find(e => e.name === character)
  return (
    <main className="move-list">
      {selectedCharacter &&
        selectedCharacter.moves.map(move => (
          <Move
            key={move.id}
            move={move}
            hasDelay={hasDelay}
            hasNotation={hasNotation}
          />
        ))}
    </main>
  )
}

export default MoveList
