import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { INFPDesc } from '../../data/templates';
import "./Types.scss";

const navigate = useNavigate();

const handleDownload = () => {
  navigate("/")
}

function INFP() {
  return (
    <div className="Results">
      <div className="container">
        <div className="result-type">
          INFJ
        </div>
        <div className="type-description">
          <p>
            <INFPDesc />
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

export default INFP;