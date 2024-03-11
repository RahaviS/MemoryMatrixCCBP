import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEvent = () => {
    onClickEmoji(id)
  }

  return (
    <button type="button" className="emoji-btn" onClick={onClickEvent}>
      <li className="emoji-item">
        <img src={emojiUrl} alt={emojiName} className="emoji-icon-image" />
      </li>
    </button>
  )
}
export default EmojiCard
