import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { ESTPDesc } from '../../data/templates';
import "./Types.scss";

const navigate = useNavigate();

const handleDownload = () => {
  navigate("/")
}

function ESTP() {
  return (
    <div className="Results">
      <div className="container">
        <div className="result-type">
          ESTP
        </div>
        <div className="type-description">
          <p>
            <ESTPDesc />
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

export default ESTP;