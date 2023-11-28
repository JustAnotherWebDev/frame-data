import { useState } from "react"
import parse from "html-react-parser"
import FrameData from "./FrameData"

const Move = props => {
  const { move, hasDelay, hasNotation } = props
  const [showNotes, setShowNotes] = useState(false)

  return (
    <div className="move">
      <div className="move-details" onClick={() => setShowNotes(!showNotes)}>
        <div className={`move-rating star-${move.rating}`}>{move.rating}</div>
        <div className="move-text">
          <h4 className="move-title move-long-title">{move.title}</h4>
          <h4 className="move-title move-short-title">
            <span className="move-rating-on-title">{move.rating}</span>
            {move.shortTitle}
          </h4>
          {hasNotation ? (
            <p className="move-description">{move.command}</p>
          ) : (
            <>
              <p className="move-description move-long-description">
                {parse(move.description)}
              </p>
              <p className="move-description move-short-description">
                {parse(move.shortDescription)}
              </p>
            </>
          )}
        </div>
        <div className="move-icons">
          <div className="data-container startup-container" title="Startup">
            {move.startup}
          </div>
          <div className="data-container on-block-container" title="On Block">
            {move.advantage.onBlock > 0
              ? "+" + move.advantage.onBlock
              : move.advantage.onBlock}
          </div>
          <div
            className="data-container on-counter-container"
            title="On Counter"
          >
            {move.advantage.onCounter > 0
              ? "+" + move.advantage.onCounter
              : move.advantage.onCounter}
          </div>
          <div className="data-container on-hit-container" title="On Hit">
            {move.advantage.onHit > 0
              ? "+" + move.advantage.onHit
              : move.advantage.onHit}
          </div>
        </div>
      </div>
      <div className="move-notes" hidden={!showNotes}>
        <FrameData move={move} hasDelay={hasDelay} />
        {move.notes && (
          <div className="bits-container">
            {move.notes.map((note, id) => (
              <span className="bits" key={id}>
                {parse(note)}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Move

/*

      <div className="frame-data">
        <div className="player-1">
          {Array.from({ length: forcedStartup }, (_, id) => (
            <div key={id} className="cell forced">
              {id + 1}
            </div>
          ))}
          {hasDelay &&
            Array.from({ length: delay }, (_, id) => (
              <div key={id} className="cell delay">
                {id + 1 === delay ? id + 1 : ""}
              </div>
            ))}
          {Array.from({ length: startup }, (_, id) => (
            <div key={id} className="cell startup"></div>
          ))}
          {Array.from({ length: active }, (_, id) => (
            <div key={id} className="cell active">
              {id + 1 + startup}
            </div>
          ))}
          {Array.from({ length: recovery }, (_, id) => (
            <div key={id} className="cell recovery">
              {id + 1 === recovery ? id + 1 : ""}
            </div>
          ))}
          {Array.from(
            { length: 60 - (hasDelay ? totalWithDelay : total) },
            (_, id) => (
              <div key={id} className="cell empty"></div>
            )
          )}
        </div>
        <div className="on-counter">
          {Array.from({ length: empty }, (_, id) => (
            <div key={id} className="cell empty"></div>
          ))}
          {move.advantage &&
            Array.from({ length: counterStun }, (_, id) => (
              <div key={id} className="cell stun">
                {id + 1 === counterStun ? id + 1 : ""}
              </div>
            ))}
          {Array.from(
            {
              length:
                60 -
                (hasDelay ? delay : 0) -
                forcedStartup -
                startup -
                counterStun,
            },
            (_, id) => (
              <div key={id} className="cell empty"></div>
            )
          )}
        </div>
        <div className="on-hit">
          {Array.from({ length: empty }, (_, id) => (
            <div key={id} className="cell empty"></div>
          ))}
          {move.advantage &&
            Array.from({ length: hitStun }, (_, id) => (
              <div key={id} className="cell stun">
                {id + 1 === hitStun ? id + 1 : ""}
              </div>
            ))}
          {Array.from(
            {
              length:
                60 - (hasDelay ? delay : 0) - forcedStartup - startup - hitStun,
            },
            (_, id) => (
              <div key={id} className="cell empty"></div>
            )
          )}
        </div>
        <div className="on-block">
          {Array.from({ length: empty }, (_, id) => (
            <div key={id} className="cell empty"></div>
          ))}
          {move.advantage &&
            Array.from({ length: blockStun }, (_, id) => (
              <div key={id} className="cell stun">
                {id + 1 === blockStun ? id + 1 : ""}
              </div>
            ))}
          {Array.from(
            {
              length:
                60 -
                (hasDelay ? delay : 0) -
                forcedStartup -
                startup -
                blockStun,
            },
            (_, id) => (
              <div key={id} className="cell empty"></div>
            )
          )}
        </div>
      </div>
*/
