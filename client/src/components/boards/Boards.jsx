import { useQuery } from "@tanstack/react-query";
import ImageN from "../imageN/ImageN"
import "./boards.css"
import apiRequest from "../../utils/apiRequest";
import {format} from "timeago.js"

const Boards = ({ userId }) => {
    
    const { isPending, error, data } = useQuery({
        queryKey: ["boards", userId],
        queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
      });
    
      if (isPending) return "Loading...";
    
      if (error) return "An error has occured " + error.message;
    
      if (!data) return "Board not found";
  return (
      <div className="collections">
          {/* COLLECTION */}
          {data?.map((board) => (
              <div className="collection" key={board._id}>
              <ImageN path={board.firstPin.media} alt="" />
              <div className="collectionInfo">
                      <h1>{board.title}</h1>
                      <span>{board.pinCount} Pins - {format(board.createdAt)}</span>
              </div>
          </div>
          ))}
    </div>
  )
}

export default Boards