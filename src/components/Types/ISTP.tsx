import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { ISTPDesc } from '../../data/templates';
import "./Types.scss";

const navigate = useNavigate();

const handleDownload = () => {
  navigate("/")
}

function ISTP() {
  return (
    <div className="Results">
      <div className="container">
        <div className="result-type">
          ISTP
        </div>
        <div className="type-description">
          <p>
            <ISTPDesc />
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

export default ISTP;