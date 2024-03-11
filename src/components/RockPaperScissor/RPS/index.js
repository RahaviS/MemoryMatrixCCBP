import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoIosArrowRoundBack, IoMdClose} from 'react-icons/io'
import RPSElements from '../RPSElements'
import RPSResult from '../RPSResult'
import './index.css'

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://res.cloudinary.com/dktojjeva/image/upload/v1709304576/Rock_h2ez62.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://res.cloudinary.com/dktojjeva/image/upload/v1709304576/Scissor_asr6sx.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://res.cloudinary.com/dktojjeva/image/upload/v1709304576/Paper_kfqxzt.png',
  },
]

const rpsConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  gameOver: 'GAME_OVER',
}

class RPS extends Component {
  state = {
    rpsGameStatus: rpsConstants.initial,
    isPlaying: false,
    myChoice: {},
    computerChoice: {},
    score: 0,
  }

  renderRules = () => (
    <div className="rps-rules">
      <h1 className="rps-rules-text">Rules</h1>
      <div className="rules-list-container">
        <ul className="rps-rules-list">
          <li className="rps-rule-item">
            The game result should be based on user and user opponent choices
          </li>
          <li className="rps-rule-item">
            When the user choice is Rock and his opponent choice is rock then
            the result will be <span>IT IS DRAW</span>
          </li>
          <li className="rps-rule-item">
            When the user choice is paper and his opponent choice is rock then
            the result will be <span>YOU WON</span>
          </li>
          <li className="rps-rule-item">
            When the user choice is a scissor and his opponent choice is rock
            then the result will be <span>YOU LOSE</span>
          </li>
          <li className="rps-rule-item">
            When the user choice is paper and his opponent choice is paper then
            the result will be <span>IT IS DRAW</span>
          </li>
          <li className="rps-rule-item">
            When the user choice is scissors and his opponent choice is paper
            then the result will be <span>YOU WON</span>
          </li>
        </ul>
        <ul className="rps-rules-list">
          <li className="rps-rule-item">
            When the user choice is rock and his opponent choice is scissors
            then the result will be <span>YOU WON</span>
          </li>
          <li className="rps-rule-item">
            When the user choice is paper and his opponent choice is scissors
            then the result will be <span>YOU LOSE</span>
          </li>
          <li className="rps-rule-item">
            When the user choice is scissors and his opponent choice is scissors
            then the result will be <span>IT IS DRAW</span>
          </li>
          <li className="rps-rule-item">
            When the result is <span>YOU WON</span>, then the count of the score
            should be incremented by 1
          </li>
          <li className="rps-rule-item">
            When the result is <span>IT IS DRAW</span>, then the count of the
            score should be the same
          </li>
          <li className="rps-rule-item">
            When the result is <span>YOU LOSE</span>, then the count of the
            score should be decremented by 1.
          </li>
        </ul>
      </div>
    </div>
  )

  onStartPlaying = () => {
    this.setState({isPlaying: true, rpsGameStatus: rpsConstants.inProgress})
  }

  renderRulesContainer = () => (
    <>
      <img
        src="https://res.cloudinary.com/dktojjeva/image/upload/v1709187224/Group_7469_xycjo2.png"
        alt="rps game"
        className="rps-home-img"
      />
      <div className="rps-rules-container">
        {this.renderRules()}
        <Link to="/rockpaperscissor" className="link-item">
          <button
            type="button"
            className="rps-start-btn"
            onClick={this.onStartPlaying}
          >
            Start Playing
          </button>
        </Link>
      </div>
    </>
  )

  renderModal = () => (
    <div className="rps-popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="rps-rules-btn">
            Rules
          </button>
        }
      >
        {close => (
          <div className="rps-modal-container">
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

  updateScore = (id, image) => {
    const randomSelection = Math.floor(Math.random() * choicesList.length)
    if (id === choicesList[randomSelection].id) {
      this.setState({
        myChoice: [id, image],
        computerChoice: choicesList[randomSelection],
        message: 'IT IS DRAW',
        rpsGameStatus: rpsConstants.gameOver,
      })
    } else if (id === 'rock' && choicesList[randomSelection].id === 'scissor') {
      this.setState(prevState => ({
        myChoice: [id, image],
        computerChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        message: 'YOU WON',
        rpsGameStatus: rpsConstants.gameOver,
      }))
    } else if (id === 'rock' && choicesList[randomSelection].id === 'paper') {
      this.setState(prevState => ({
        myChoice: [id, image],
        computerChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        message: 'YOU LOSE',
        rpsGameStatus: rpsConstants.gameOver,
      }))
    } else if (id === 'scissor' && choicesList[randomSelection].id === 'rock') {
      this.setState(prevState => ({
        myChoice: [id, image],
        computerChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        message: 'YOU LOSE',
        rpsGameStatus: rpsConstants.gameOver,
      }))
    } else if (
      id === 'scissor' &&
      choicesList[randomSelection].id === 'paper'
    ) {
      this.setState(prevState => ({
        myChoice: [id, image],
        computerChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        message: 'YOU WON',
        rpsGameStatus: rpsConstants.gameOver,
      }))
    } else if (id === 'paper' && choicesList[randomSelection].id === 'rock') {
      this.setState(prevState => ({
        myChoice: [id, image],
        computerChoice: choicesList[randomSelection],
        score: prevState.score + 1,
        message: 'YOU WON',
        rpsGameStatus: rpsConstants.gameOver,
      }))
    } else if (
      id === 'paper' &&
      choicesList[randomSelection].id === 'scissor'
    ) {
      this.setState(prevState => ({
        myChoice: [id, image],
        computerChoice: choicesList[randomSelection],
        score: prevState.score - 1,
        message: 'YOU LOSE',
        rpsGameStatus: rpsConstants.gameOver,
      }))
    }
  }

  renderRpsGame = () => (
    <>
      <h1 className="lets-pick">Lets pick</h1>
      <ul className="rps-elements-container">
        {choicesList.map(each => (
          <RPSElements
            rpsElement={each}
            key={each.id}
            onClickIcon={this.updateScore}
          />
        ))}
      </ul>
    </>
  )

  renderRpsResults = () => {
    const {message, myChoice, computerChoice, score} = this.state
    return (
      <RPSResult
        message={message}
        myChoice={myChoice}
        computerChoice={computerChoice}
        score={score}
        onClickPlayAgain={this.onStartPlaying}
      />
    )
  }

  renderRpsChoices = () => {
    const {rpsGameStatus} = this.state
    switch (rpsGameStatus) {
      case rpsConstants.initial:
        return this.renderRulesContainer()
      case rpsConstants.inProgress:
        return this.renderRpsGame()
      case rpsConstants.gameOver:
        return this.renderRpsResults()
      default:
        return null
    }
  }

  render() {
    const {isPlaying} = this.state
    return (
      <div className="rps-bg-container">
        <div className="rps-menu">
          <Link to="/" className="link-item">
            <div className="rps-back-icon-container">
              <IoIosArrowRoundBack className="rps-back-icon" />
              <p className="rps-back-text">Back</p>
            </div>
          </Link>
          {isPlaying && this.renderModal()}
        </div>
        <h1 className="rps-heading">ROCK PAPER SCISSOR</h1>
        <div className="rps-app-container">{this.renderRpsChoices()}</div>
      </div>
    )
  }
}
export default RPS
