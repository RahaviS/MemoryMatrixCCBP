import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {IoIosArrowRoundBack, IoMdClose} from 'react-icons/io'
import MMTiles from '../MMTiles'
import './index.css'

const mmGameConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  gameOver: 'GAME_OVER',
}

const levels = [
  {id: 1, tiles: 9, active: 3},
  {id: 2, tiles: 16, active: 4},
  {id: 3, tiles: 25, active: 5},
  {id: 4, tiles: 36, active: 6},
  {id: 5, tiles: 49, active: 7},
  {id: 6, tiles: 64, active: 8},
  {id: 7, tiles: 81, active: 9},
  {id: 8, tiles: 100, active: 10},
  {id: 9, tiles: 121, active: 11},
  {id: 10, tiles: 144, active: 12},
  {id: 11, tiles: 169, active: 13},
  {id: 12, tiles: 196, active: 14},
  {id: 13, tiles: 225, active: 15},
  {id: 14, tiles: 256, active: 16},
  {id: 15, tiles: 289, active: 17},
]

class MMGame extends Component {
  state = {
    mmGameStatus: mmGameConstants.initial,
    isPlaying: false,
    level: levels[0],
  }

  onStartPlaying = () => {
    this.setState({mmGameStatus: mmGameConstants.inProgress, isPlaying: true})
  }

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

  renderRules = () => (
    <div className="mm-rules-container">
      <h1 className="mm-rules-text">Rules</h1>
      <div className="rules-list-container">
        <ul className="mm-rules-list">
          <li className="mm-rule-item">
            In each level of the Game, Users should be able to see the Grid with
            (N X N) size starting from 3 and the grid will highlight N cells in
            Blue, the N highlighted cells will be picked randomly.
          </li>
          <li className="mm-rule-item">
            The highlighted cells will remain N seconds for the user to memorize
            the cells. At this point, the user should not be able to perform any
            action.
          </li>
          <li className="mm-rule-item">
            After N seconds, the grid will clear the N highlighted cells.
          </li>
        </ul>
        <ul className="mm-rules-list">
          <li className="mm-rule-item">
            At N seconds, the user can click on any cell. Clicking on a cell
            that was highlighted before it will turn blue. Clicking on the other
            cells that were not highlighted before then will turn to red.
          </li>
          <li className="mm-rule-item">
            The user should be promoted to the next level if they guess all N
            cells correctly in one attempt.
          </li>
          <li className="mm-rule-item">
            The user should be taken to the results page if the user clicks on
            the wrong cell.
          </li>
          <li className="mm-rule-item">
            If the user completed all the levels, then the user should be taken
            to the results page.
          </li>
        </ul>
      </div>
    </div>
  )

  renderRulesContainer = () => (
    <>
      <img
        src="https://res.cloudinary.com/dktojjeva/image/upload/v1709187207/memory_p3sjwa.png"
        alt="mm game"
        className="mm-home-img"
      />
      <div>
        {this.renderRules()}
        <button
          type="button"
          className="mm-start-btn"
          onClick={this.onStartPlaying}
        >
          Start Playing
        </button>
      </div>
    </>
  )

  renderMemoryMatrix = () => {
    const {level} = this.state
    return (
      <MMTiles noOfTiles={level.tiles} active={level.active} id={level.id} />
    )
  }

  renderChoices = () => {
    const {mmGameStatus} = this.state
    switch (mmGameStatus) {
      case mmGameConstants.initial:
        return this.renderRulesContainer()
      case mmGameConstants.inProgress:
        return this.renderMemoryMatrix()
      case mmGameConstants.gameOver:
        return this.renderResults()
      default:
        return null
    }
  }

  render() {
    const {isPlaying} = this.state
    return (
      <div className="mm-bg-container">
        <div className="mm-menu">
          <Link to="/" className="link-item">
            <div className="mm-back-icon-container">
              <IoIosArrowRoundBack className="mm-back-icon" />
              <p className="mm-back-text">Back</p>
            </div>
          </Link>
          {isPlaying && this.renderModal()}
        </div>
        <div className="mm-app-container">
          <h1 className="mm-heading">Memory Matrix</h1>
          {this.renderChoices()}
        </div>
      </div>
    )
  }
}
export default MMGame
