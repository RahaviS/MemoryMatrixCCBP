import './index.css'

const MMTiles = props => {
  const {noOfTiles, active} = props
  const activeTiles = []
  const emptyString = ''

  while (activeTiles.length < active) {
    const randomNum = Math.floor(Math.random() * noOfTiles)
    if (activeTiles.indexOf(randomNum) === -1) activeTiles.push(randomNum)
  }

  const generateTiles = () => {
    let tilesList = []
    for (let i = 0; i < noOfTiles; i += 1) {
      const tileDetails = {
        id: i,
        className: activeTiles.includes(i) ? 'tile active' : 'tile',
      }
      tilesList = [...tilesList, tileDetails]
    }
    console.log(activeTiles)
    tilesList.map(each => console.log(each))
    return (
      <ul className="tile-list">
        {tilesList.map(eachTile => (
          <li key={eachTile.id} className={`${eachTile.className}`}>
            {emptyString}
          </li>
        ))}
      </ul>
    )
  }

  return <div className="matrix-board">{generateTiles()}</div>
}
export default MMTiles
