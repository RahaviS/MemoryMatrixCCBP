import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="welcome-page">
    <h1 className="title">Games</h1>
    <ul className="game-list">
      <Link to="/emojigame" className="link-item">
        <li className="game-list-item">
          <img
            src="https://res.cloudinary.com/dktojjeva/image/upload/v1709186962/Group_7428_jv6kdt.png"
            alt="emoji-card"
            className="home-img emoji"
          />
        </li>
      </Link>
      <Link to="/memorymatrix" className="link-item">
        <li className="game-list-item">
          <h1 className="game-title">Memory Matrix</h1>
          <img
            src="https://res.cloudinary.com/dktojjeva/image/upload/v1709187207/memory_p3sjwa.png"
            alt="memory-game"
            className="home-img memory"
          />
        </li>
      </Link>
      <Link to="/rockpaperscissor" className="link-item">
        <li className="game-list-item">
          <h1 className="game-title">ROCK PAPER SCISSOR</h1>
          <img
            src="https://res.cloudinary.com/dktojjeva/image/upload/v1709187224/Group_7469_xycjo2.png"
            alt="rps-game"
            className="home-img"
          />
        </li>
      </Link>
      <Link to="/cardflip" className="link-item">
        <li className="game-list-item">
          <img
            src="https://res.cloudinary.com/dktojjeva/image/upload/v1709187216/animals_b71o81.png"
            alt="card-flip"
            className="home-img card"
          />
        </li>
      </Link>
    </ul>
  </div>
)
export default Home
