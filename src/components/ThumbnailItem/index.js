import './index.css'

const ThumbnailItem = props => {
  const {eachOne, changingTheActiveID, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachOne

  const clickFun = () => {
    changingTheActiveID(id)
  }

  const ActiveBut = isActive ? '' : 'ac'
  return (
    <li className="thumbnailList">
      <button
        type="button"
        className={`thumbnailBtn ${ActiveBut}`}
        onClick={clickFun}
      >
        <img alt={thumbnailAltText} src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
