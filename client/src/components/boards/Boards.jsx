import { useQuery } from "@tanstack/react-query";
import ImageN from "../imageN/ImageN"
import "./boards.css"
import apiRequest from "../../utils/apiRequest";

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
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
          {/* COLLECTION */}
          <div className="collection">
              <ImageN path="/pins/pin1.jpeg" alt="" />
              <div className="collectionInfo">
                  <h1>Minimalist Bedrooms</h1>
                  <span>12 Pins - 1w</span>
              </div>
          </div>
    </div>
  )
}

export default Boards