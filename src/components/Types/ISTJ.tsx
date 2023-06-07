import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { ISTJDesc } from '../../data/templates';
import "./Types.scss";

const navigate = useNavigate();

const handleDownload = () => {
  navigate("/")
}

function ISTJ() {
  return (
    <div className="Results">
      <div className="container">
        <div className="result-type">
          ISTJ
        </div>
        <div className="type-description">
          <p>
            <ISTJDesc />
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

export default ISTJ;