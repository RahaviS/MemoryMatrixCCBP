import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoIosArrowRoundBack, IoMdClose} from 'react-icons/io'
import EmojiCard from '../EmojiCard'
import Navbar from '../Navbar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const gameStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  gameOver: 'GAME_OVER',
}

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    gameStatus: gameStatusConstants.initial,
    isPlaying: false,
    clickedId: [],
    topScore: 0,
  }

  updateScore = currentScore => {
    const {topScore} = this.state
    if (currentScore > topScore) {
      this.setState({
        topScore: currentScore,
        isPlaying: false,
        gameStatus: gameStatusConstants.gameOver,
      })
    } else {
      this.setState({
        isPlaying: false,
        gameStatus: gameStatusConstants.gameOver,
      })
    }
  }

  onClickEmoji = id => {
    const {clickedId} = this.state
    if (clickedId.includes(id)) {
      this.updateScore(clickedId.length)
    } else {
      if (clickedId.length === emojisList.length - 1) {
        this.updateScore(emojisList.length)
      }
      this.setState(prevState => ({clickedId: [...prevState.clickedId, id]}))
    }
  }

  renderEmojis = () => {
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  playAgain = () => {
    this.setState({
      clickedId: [],
      isPlaying: true,
      gameStatus: gameStatusConstants.inProgress,
    })
  }

  onStartPlaying = () => {
    this.setState({isPlaying: true, gameStatus: gameStatusConstants.inProgress})
  }

  renderRules = () => (
    <>
      <h1 className="rules-title">Rules</h1>
      <ul className="rules-list">
        <li className="rule-item">
          User should be able to see the list of Emojis
        </li>
        <li className="rule-item">
          When the user clicks any one of the Emoji for the First time, then the
          count of the score should be incremented by 1 and the List of Emoji
          cards should be shuffled.
        </li>
        <li className="rule-item">
          This process should be repeated every time the user clicks on an Emoji
          card
        </li>
        <li className="rule-item">
          When the user clicks on all Emoji cards without clicking any of it
          twice, then the user will win the game.
        </li>
        <li className="rule-item">
          When the user clicks on the same Emoji for the second time, then the
          user will lose the game.
        </li>
        <li className="rule-item">
          Once the game is over, the user will be redirected to the results
          page.
        </li>
      </ul>
    </>
  )

  renderRulesContainer = () => (
    <div className="rules-container">
      <img
        src="https://res.cloudinary.com/dktojjeva/image/upload/v1709186962/Group_7428_jv6kdt.png"
        alt="emoji game"
        className="home-page-img"
      />
      <div className="text-container">
        {this.renderRules()}
        <button
          type="button"
          className="start-btn"
          onClick={this.onStartPlaying}
        >
          Start playing
        </button>
      </div>
    </div>
  )

  renderResults = () => {
    const {clickedId} = this.state
    return (
      <WinOrLoseCard
        score={clickedId.length}
        onClickPlayAgain={this.playAgain}
      />
    )
  }

  renderModal = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="rules-btn">
            Rules
          </button>
        }
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              aria-label="close"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div className="text-container">{this.renderRules()}</div>
          </div>
        )}
      </Popup>
    </div>
  )

  renderChoices = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.initial:
        return this.renderRulesContainer()
      case gameStatusConstants.inProgress:
        return this.renderEmojis()
      case gameStatusConstants.gameOver:
        return this.renderResults()
      default:
        return null
    }
  }

  render() {
    const {isPlaying, clickedId, topScore, gameStatus} = this.state
    return (
      <div className="bg-container">
        {gameStatus !== gameStatusConstants.initial && (
          <Navbar
            topScore={topScore}
            score={clickedId.length}
            gameStatus={gameStatus}
          />
        )}
        <div className="menu-container">
          <Link to="/" className="link-item">
            <div className="back-icon-container">
              <IoIosArrowRoundBack className="back-icon" />
              <p className="back-text">Back</p>
            </div>
          </Link>
          {isPlaying && this.renderModal()}
        </div>
        <div className="app-container">{this.renderChoices()}</div>
      </div>
    )
  }
}
export default EmojiGame
