import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <link
      rel='preload'
      href='https://sdfestaticassets-eu-west-1.sciencedirectassets.com/shared-assets/3/fonts/nexus/1.0/sans/NexusSansWebPro-Regular.woff'
      as='font'
      crossOrigin='anonymous'
      type='font/woff'
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
