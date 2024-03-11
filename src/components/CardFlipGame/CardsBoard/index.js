import {Component} from 'react'
import './index.css'

const cardsData = [
  {
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

class CardsBoard extends Component {
  state = {noOfFlips: 0}

  onClickEvent = () => {
    this.setState(prevState => ({noOfFlips: prevState.noOfFlips + 1}))
  }

  render() {
    const {noOfFlips} = this.state
    const shuffledCards1 = cardsData.toSorted(() => Math.random() - 0.5)
    const shuffledCards2 = cardsData.toSorted(() => Math.random() - 0.5)
    return (
      <div className="cards-container">
        <p>{noOfFlips}</p>
        <ul className="cards-list">
          {shuffledCards1.map(eachCard => (
            <li className="card">
              <button
                type="button"
                id={eachCard.name}
                onClick={this.onClickEvent}
                className="card-btn"
              >
                <img
                  src={eachCard.image}
                  alt={eachCard.name}
                  className="card-img"
                />
              </button>
            </li>
          ))}
        </ul>
        <ul className="cards-list">
          {shuffledCards2.map(eachCard => (
            <li className="card">
              <button
                type="button"
                id={eachCard.name}
                onClick={this.onClickEvent}
                className="card-btn"
              >
                <img
                  src={eachCard.image}
                  alt={eachCard.name}
                  className="card-img"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default CardsBoard
