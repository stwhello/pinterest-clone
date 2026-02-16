import { useState } from "react";
import ImageN from "../../components/imageN/ImageN";
import "./profilePage.css";
import Gallery from "../../components/gallery/Gallery";
import Boards from "../../components/boards/Boards";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import { useParams } from "react-router";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  const { username } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occured " + error.message;

  if (!data) return "User not found";

  return (
    <div className='profilePage'>
      <ImageN
        className='profileImg'
        w={100}
        h={100}
        path={data.img || '/general/noAvatar.png'}
        alt=''
      />
      <h1 className='profileName'>{data.displayName}</h1>
      <span className='profileUsername'>@{data.username}</span>
      <div className='followCounts'>10 followers - 20 followers</div>
      <div className='profileInteractions'>
        <ImageN path='/general/share.svg' alt='' />
        <div className='profileButtons'>
          <button>Message</button>
          <button>Follow</button>
        </div>
        <ImageN path='/general/more.svg' alt='' />
      </div>
      <div className='profileOptions'>
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery userId={data._id} /> : <Boards userId={data._id}/>}
    </div>
  );
};

export default ProfilePage;
