import './index.css'

const RPSResult = props => {
  const {message, myChoice, computerChoice, score, onClickPlayAgain} = props
  const getResultImage = () => {
    switch (message) {
      case 'YOU WON':
        return 'https://res.cloudinary.com/dktojjeva/image/upload/v1709312532/Group_7618_1_n05oty.png'
      case 'YOU LOSE':
        return 'https://res.cloudinary.com/dktojjeva/image/upload/v1709312532/Group_7618_2_xc2c3l.png'
      case 'IT IS DRAW':
        return 'https://res.cloudinary.com/dktojjeva/image/upload/v1709312532/Group_7618_dij0o0.png'
      default:
        return null
    }
  }

  const getSmileyImage = () => {
    switch (message) {
      case 'YOU WON':
        return 'https://res.cloudinary.com/dktojjeva/image/upload/v1709312532/Emoji_ynpocn.png'
      case 'YOU LOSE':
        return 'https://res.cloudinary.com/dktojjeva/image/upload/v1709312532/Emoji_1_afvqbv.png'
      case 'IT IS DRAW':
        return 'https://res.cloudinary.com/dktojjeva/image/upload/v1709312532/Emoji_2_zckp8g.png'
      default:
        return null
    }
  }
  const resultImgUrl = getResultImage()
  const smileyUrl = getSmileyImage()
  return (
    <div className="rps-results-container">
      <div className="result-top-section">
        <ul className="names-list">
          <li>Rock</li>
          <li>Paper</li>
          <li>Scissor</li>
        </ul>
        <img src={resultImgUrl} alt="result img" className="result-img" />
        <div className="score-section">
          <p>Score</p>
          <p className="score">{score}</p>
        </div>
      </div>
      <div className="mid-section">
        <p>You</p>
        <p>Opponent</p>
      </div>
      <div className="status-section">
        <img src={myChoice[1]} alt="my choice" className="choice-img" />
        <div className="center-content">
          <img src={smileyUrl} alt="smiley icon" className="smiley-icon" />
          <p>{message}</p>
          <button
            type="button"
            className="play-again-rps"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <img
          src={computerChoice.imageUrl}
          alt="opponent-choice"
          className="choice-img"
        />
      </div>
    </div>
  )
}

export default RPSResult
