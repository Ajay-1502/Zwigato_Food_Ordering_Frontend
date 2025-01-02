import { LOGO_URL } from '../utils/constant.js';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext.js';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between  bg-orange-200">
      <div className="logo-container  bg-orange-200 p-2">
        <img className="w-36" src={LOGO_URL} alt="Zwigato Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 cursor-pointer">Cart</li>
          <button
            className="login-btn px-4"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
          <li className="px-2 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
