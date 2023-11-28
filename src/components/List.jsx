import data from "../assets/data.json"
import Move from "./Move"

const List = props => {
  const { character, hasDelay, hasNotation } = props
  const moves = data.find(e => (e.name = character)).moves
  return (
    moves &&
    moves.map(move => (
      <Move
        key={move.id}
        move={move}
        hasDelay={hasDelay}
        hasNotation={hasNotation}
      />
    ))
  )
}

export default List
