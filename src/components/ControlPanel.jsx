const ControlPanel = props => {
  const { hasDelay, setDelay, hasNotation, setNotation } = props
  return (
    <>
      <div onClick={() => setDelay(!hasDelay)}>DELAY!</div>
      <div onClick={() => setNotation(!hasNotation)}>NOTATIONS!</div>
    </>
  )
}

export default ControlPanel
