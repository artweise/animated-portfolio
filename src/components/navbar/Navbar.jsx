import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}

      <div className='wrapper'>
        <span>Art Weise</span>
        <div className='social'>
          <a href='#'>
            <img src='/github.png' alt='' />
            <img src='/linkedin.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
