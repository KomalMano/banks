import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './Assets/Styles/Index.css'
import './Assets/Styles/Fonts.css'
import './Assets/Styles/TabView.css'
import './Assets/Styles/MobileView.css'

ReactDOM.hydrate(
  document.getElementById('root'),
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  );
