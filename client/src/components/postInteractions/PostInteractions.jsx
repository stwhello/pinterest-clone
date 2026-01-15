import ImageN from "../imageN/ImageN"
import "./postInteractions.css"

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <ImageN path="/general/react.svg" alt="" />
        273
        <ImageN path="/general/share.svg" alt=""/>
        <ImageN path="/general/more.svg" alt=""/>
      </div>
      <button>Save</button>
    </div>
  )
}

export default PostInteractions