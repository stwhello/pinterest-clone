import ImageN from "../imageN/ImageN";
import UserButton from "../userButton/UserButton";
import "./topBar.css";

const TopBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='topBar'>
      {/* SEARCH */}
      <form onSubmit={handleSubmit} className='search'>
        <ImageN path='/general/search.svg' alt='' />
        <input type='text' placeholder='Search' />
      </form>

      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;
