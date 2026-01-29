import ImageN from "../imageN/ImageN";
import "./galleryItem.css";
import { Link } from "react-router";

const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width

  return (
    <div
      className='galleryItem'
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={item.media} alt='' /> */}
      <ImageN path={item.media} alt="" w={372} h={optimizedHeight}/>
      <Link to={`/pin/${item._id}`} className='overlay' />
      <button className='saveButton'>Save</button>
      <div className='overlayIcons'>
        <button>
          <ImageN path='/general/share.svg' alt='' />
        </button>
        <button>
          <ImageN path='/general/more.svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
