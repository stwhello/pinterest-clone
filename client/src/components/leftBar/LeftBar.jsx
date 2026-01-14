import ImageN from "../imageN/ImageN";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        <a href='/' className="menuIcon">
          <ImageN path='/general/logo.png' alt='' className="logo"/>
        </a>
        <a href='/' className="menuIcon">
          <ImageN path='/general/home.svg' alt='' />
        </a>
        <a href='/' className="menuIcon">
          <ImageN path='/general/create.svg' alt='' />
        </a>
        <a href='/' className="menuIcon">
          <ImageN path='/general/updates.svg' alt='' />
        </a>
        <a href='/' className="menuIcon">
          <ImageN path='/general/messages.svg' alt='' />
        </a>
      </div>

      <a href='/' className="menuIcon">
          <ImageN path='/general/settings.svg' alt='' />
        </a>
    </div>
  );
};

export default LeftBar;
