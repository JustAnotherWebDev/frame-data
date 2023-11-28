import "../components/frame-data.css"

const FrameData = props => {
  const { move, hasDelay } = props
  const forcedStartup = move.forcedStartup || 0
  const startup = move.startup - 1 || 0
  const active = move.active || 0
  const recovery = move.recovery || 0
  const delay = move.delay || 0
  const total = startup + active + recovery
  const totalWithForced = total + forcedStartup
  const totalWithDelay = total + delay
  const totalWithForcedAndDelay = total + forcedStartup + delay
  const empty = forcedStartup + startup + (hasDelay ? delay : 0)

  const counterStun = move.active + move.recovery + move.advantage.onCounter
  const hitStun = move.active + move.recovery + move.advantage.onHit
  const blockStun = move.active + move.recovery + move.advantage.onBlock

  const counterStunHeat = move.advantageHeat
    ? move.active + move.recovery + move.advantageHeat.onCounter
    : counterStun
  const hitStunHeat = move.advantageHeat
    ? move.active + move.recovery + move.advantageHeat.onHit
    : hitStun
  const blockStunHeat = move.advantageHeat
    ? move.active + move.recovery + move.advantageHeat.onBlock
    : blockStun

  const length =
    forcedStartup +
    startup +
    Math.max(
      active + recovery,
      counterStun,
      hitStun,
      blockStun,
      counterStunHeat,
      hitStunHeat,
      blockStunHeat
    ) +
    (hasDelay ? delay : 0)

  const pForcedStartup = Math.round((forcedStartup * 100) / length)
  const pDelay = Math.round((delay * 100) / length)
  const pStartup = Math.round((startup * 100) / length)
  const pActive = Math.round((active * 100) / length)
  const pRecovery = Math.round((recovery * 100) / length)
  const pEmpty = Math.round((empty * 100) / length)
  const pCounterStun = Math.round((counterStun * 100) / length)
  const pHitStun = Math.round((hitStun * 100) / length)
  const pBlockStun = Math.round((blockStun * 100) / length)
  const pCounterStunHeat = Math.round((counterStunHeat * 100) / length)
  const pHitStunHeat = Math.round((hitStunHeat * 100) / length)
  const pBlockStunHeat = Math.round((blockStunHeat * 100) / length)

  const advantageOnCounter =
    counterStun - recovery - active > 0
      ? "+" + (counterStun - recovery - active)
      : counterStun - recovery - active
  const advantageOnHit =
    hitStun - recovery - active > 0
      ? "+" + (hitStun - recovery - active)
      : hitStun - recovery - active
  const advantageOnBlock =
    blockStun - recovery - active > 0
      ? "+" + (blockStun - recovery - active)
      : blockStun - recovery - active

  return (
    <>
      <div className="frame-data-mobile">
        <div className="table">
          <div className="player-1">
            {forcedStartup !== 0 && (
              <div data-frames={pForcedStartup} className="cell forced">
                {forcedStartup}
              </div>
            )}
            {delay !== 0 && hasDelay && (
              <div data-frames={pDelay} className="cell delay">
                {delay}
              </div>
            )}
            {startup !== 0 && (
              <div data-frames={pStartup} className="cell startup">
                {startup}
              </div>
            )}
            {active !== 0 && (
              <div data-frames={pActive} className="cell active">
                {active}
              </div>
            )}
            {recovery !== 0 && (
              <div data-frames={pRecovery} className="cell recovery">
                {recovery}
              </div>
            )}
          </div>
          <div className="on-counter">
            {empty !== 0 && (
              <div data-frames={pEmpty} className="cell empty">
                oC
              </div>
            )}
            {counterStun !== 0 && (
              <div data-frames={pCounterStun} className="cell stun">
                {`${counterStun}${move.advantage.isCounterG ? "G" : ""}`}
              </div>
            )}
          </div>
          <div className="on-hit">
            {empty !== 0 && (
              <div data-frames={pEmpty} className="cell empty">
                oH
              </div>
            )}
            {hitStun !== 0 && (
              <div data-frames={pHitStun} className="cell stun">
                {`${hitStun}${move.advantage.isHitG ? "G" : ""}`}
              </div>
            )}
          </div>
          <div className="on-block">
            {empty !== 0 && (
              <div data-frames={pEmpty} className="cell empty">
                oB
              </div>
            )}
            {blockStun !== 0 && (
              <div data-frames={pBlockStun} className="cell stun">
                {blockStun}
              </div>
            )}
          </div>
          {move.advantageHeat && (
            <>
              <div className="on-counter-heat">
                {empty !== 0 && (
                  <div data-frames={pEmpty} className="cell empty">
                    oC (Heat)
                  </div>
                )}
                {counterStunHeat !== 0 && (
                  <div
                    data-frames={pCounterStunHeat}
                    className="cell stun-heat"
                  >
                    {counterStunHeat}
                  </div>
                )}
              </div>
              <div className="on-hit-heat">
                {empty !== 0 && (
                  <div data-frames={pEmpty} className="cell empty">
                    oH (Heat)
                  </div>
                )}
                {hitStunHeat !== 0 && (
                  <div data-frames={pHitStunHeat} className="cell stun-heat">
                    {hitStunHeat}
                  </div>
                )}
              </div>
              <div className="on-block-heat">
                {empty !== 0 && (
                  <div data-frames={pEmpty} className="cell empty">
                    oB (Heat)
                  </div>
                )}
                {blockStunHeat !== 0 && (
                  <div data-frames={pBlockStunHeat} className="cell stun-heat">
                    {blockStunHeat}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default FrameData

/*
{
  "id": 2,
  "parentId": 1,
  "command": "1,2",
  "blockLevel": "HH",
  "forcedStartup": 3,
  "delay": 10,
  "startup": 12,
  "active": 1,
  "recovery": 21,
  "advantage": {
    "onCounter": 9,
    "onCounteTeched": null,
    "onHit": 8,
    "onHitTeched": null,
    "onBlock": -3
  },
  "advantageHeat": {
    "onCounter": null,
    "onCounteTeched": null,
    "onHit": null,
    "onHitTeched": null,
    "onBlock": null
  },
  "gap": {
    "onCounter": 0,
    "onHit": 0,
    "onBlock": 1
  },
  "title": "Left Right Combo",
  "shortTitle": "Left Right Combo",
  "description": "<i className='icon btn-1'></i><i className='icon btn-2'></i>",
  "shortDescription": "<i className='icon btn-1'></i><i className='icon btn-2'></i>",
  "statuses": ["power-crush"],
  "notes": "<p>Jails on standing opponent</p><p>Mixup on followup: 1, 3 or 4</p>",
  "rating": 5
}
*/
