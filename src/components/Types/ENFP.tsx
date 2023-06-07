import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { ENFPDesc } from '../../data/templates';
import "./Types.scss";

const navigate = useNavigate();

const handleDownload = () => {
  navigate("/")
}

function ENFP() {
  return (
    <div className="Results">
      <div className="container">
        <div className="result-type">
          ENFP
        </div>
        <div className="type-description">
          <p>
            <ENFPDesc />
          </p>
        </div>
        
        <div className="button-container">
          <div className="dark-button" onClick={handleDownload}>
            Idi na početak
          </div>
        </div>

      </div>

    </div>
  );
}

export default ENFP;