import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { ENTJDesc } from '../../data/templates';
import "./Types.scss";

const navigate = useNavigate();

const handleDownload = () => {
  navigate("/")
}

function ENTJ() {
  return (
    <div className="Results">
      <div className="container">
        <div className="result-type">
          INFJ
        </div>
        <div className="type-description">
          <p>
            <ENTJDesc />
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

export default ENTJ;