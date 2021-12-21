import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import {App_radio} from "./js/App_radio.js"
import body from "./html/index.html"
import "./css/style.css"
document.body.innerHTML = body;
ReactDOM.render(<App_radio />, document.getElementById('root'));
