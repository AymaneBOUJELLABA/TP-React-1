import React from "react";
import {
  Link
} from "react-router-dom";

export default function Navigbar() {
  return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/count">Counter Button</Link>
          </li>
          <li>
            <Link to="/form">Formulaire</Link>
          </li>
          <li>
            <Link to="/quote">Quotes API</Link>
          </li>
          <li>
            <Link to="/context">Context</Link>
          </li>
          <li>
            <Link to="/redux">Redux Counter</Link>
          </li>
        </ul>
        <hr />
      </div>
  );
}