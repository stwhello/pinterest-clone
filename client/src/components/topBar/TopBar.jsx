import ImageN from "../imageN/ImageN"
import UserButton from "../userButton/UserButton"
import "./topBar.css"

const TopBar = () => {
  return (
    <div className="topBar">
      {/* SEARCH */}
      <div className="search">
        <ImageN path="/general/search.svg" alt="" />
        <input type="text"placeholder="Search" />
      </div>

      {/* USER */}
      <UserButton />
    </div>
  )
}

export default TopBar