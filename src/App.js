import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import EmojiGame from './components/EmojiGame'
import RPS from './components/RockPaperScissor/RPS'
import MMGame from './components/MemoryMatrix/MMGame'
import CardsBoard from './components/CardFlipGame/CardsBoard'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/emojigame" component={EmojiGame} />
    <Route exact path="/rockpaperscissor" component={RPS} />
    <Route exact path="/memorymatrix" component={MMGame} />
    <Route exact path="/cardflip" component={CardsBoard} />
  </Switch>
)
export default App
