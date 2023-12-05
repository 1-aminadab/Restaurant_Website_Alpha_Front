import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './i18next.js'
import { BrowserRouter } from "react-router-dom";
import Preload from "./pages/home/components/Preload.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div className="preload"><div className="circle"></div>
    <p className="text">melala</p></div>}>
      <App />
    </Suspense>
      
    </BrowserRouter>
  </React.StrictMode>
);
