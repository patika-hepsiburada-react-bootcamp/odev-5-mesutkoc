import React from 'react'
import GitHubLogo from "../../assets/github.png";
function index() {
    return (
      <div className="footer">
        <p>Mesut Koç</p>
        <a href="https://github.com/mesutkoc">
          <img className="footerIcon" src={GitHubLogo} alt="github" />
        </a>
      </div>
    );
}

export default index
