import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/BlackOpsOne-Regular.ttf'
import reportWebVitals from './reportWebVitals';
import UnderConstruction from "./pages/under construction";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./pages/contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route path="/s" element={<UnderConstruction />} />
                  <Route path="/a" element={<UnderConstruction />} />
                  <Route path="/l" element={<UnderConstruction />} />
                  <Route path="/e" element={<UnderConstruction />} />
                  <Route path="/z" element={<UnderConstruction />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
