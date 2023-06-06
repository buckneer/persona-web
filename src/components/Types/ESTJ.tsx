import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { ESTJDesc } from '../../data/templates';
import "./Types.scss";

const navigate = useNavigate();

const handleDownload = () => {
  navigate("/")
}

function ESTJ() {
  return (
    <div className="Results">
      <div className="container">
        <div className="result-type">
          ESTJ
        </div>
        <div className="type-description">
          <p>
            <ESTJDesc />
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

export default ESTJ;