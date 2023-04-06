import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const News = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <div className="box">
        <pre>{props.extra}</pre>
        <p>{props.text}</p>
      </div>
      <div className="square">
        <h1>{props.header}</h1>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <News 
        name = "BBC News" 
        extra = "2020" 
        text = "Bekzod Valiev" 
        header = "BigJob"/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

