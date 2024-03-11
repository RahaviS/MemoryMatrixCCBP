import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props
  const imgUrl =
    score === 12
      ? 'https://res.cloudinary.com/dktojjeva/image/upload/v1709216318/Win_xrrw07.png'
      : 'https://res.cloudinary.com/dktojjeva/image/upload/v1709216318/Lose_1_k0srbz.png'
  const winOrLoseText = score === 12 ? 'You Won' : 'You Lose'

  return (
    <div className="results-container">
      <div className="result-contents">
        <h1 className="result-text">{winOrLoseText}</h1>
        <p className="best-score-text">Best Score</p>
        <p className="final-score">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt={winOrLoseText} className="result-img" />
    </div>
  )
}
export default WinOrLoseCard
