import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { ESFJDesc } from '../../data/templates';
import "./Types.scss";

const navigate = useNavigate();

const handleDownload = () => {
  navigate("/")
}

function ESFJ() {
  return (
    <div className="Results">
      <div className="container">
        <div className="result-type">
          ESFJ
        </div>
        <div className="type-description">
          <p>
            <ESFJDesc />
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

export default ESFJ;