import React from 'react';
import AuthService from "../../utils/auth"

const Header = () => {
  // function for logout button
  
  return (
    <header className="teal lighten-2 mb-4 py-5 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
            <h1 className="m-0">⏰ Blockout</h1>
            <span className="m-0" >Live each day as if it were a gift. </span>
        </div>
      </div>
      {/* ternary for logout button */}
        {/* {loggedIn? (
            <button
            className="m-6 waves-effect waves-light btn-floating"
            style={{ borderRadius: "10px", width: "50px" }}
            
          >Logout</button>
        ): (<p>Welcome!</p>)}   */}
      
    </header>
  );
};

export default Header;