import './index.css'

const DestinationItem = props => {
  const {destinationUserList} = props
  const {imgUrl, name} = destinationUserList
  return (
    <li className="background-container">
      <img className="item-image" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
