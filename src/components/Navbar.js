import React from "react";

const Navbar = props => (
  <nav>
    <div className="nav-wrapper purple lighten-2">
      <a className="brand-logo left">Calming Clicks</a>
      <ul id="nav-mobile" className="right">
        <li>
          <div className="brand-logo center">
            Current Score: {props.currentScore}
          </div>
        </li>
        <li>
          <div className="brand-logo right">Top Score: {props.topScore}</div>
        </li>
      </ul>
    </div>
    <div className="nav-wrapper purple lighten-3">
      <div style={{color: props.getGameStateStyle }} className="brand-logo center">
        {props.getGameState}
      </div>
    </div>
  </nav>
);

export default Navbar;
