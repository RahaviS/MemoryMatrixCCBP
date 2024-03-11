import './index.css'

const RPSElements = props => {
  const {rpsElement, onClickIcon} = props
  const {imageUrl, id} = rpsElement
  const onClickEvent = () => {
    onClickIcon(id, imageUrl)
  }
  return (
    <li className="rps-elements">
      <img
        src={imageUrl}
        alt={id}
        className="rps-icons"
        onClick={onClickEvent}
      />
    </li>
  )
}
export default RPSElements
