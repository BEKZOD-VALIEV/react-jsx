import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const Book = ({name, year, price}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{year}</h2>
      <h2>{price}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Book name = "JS for beginners" year = "2020" price = "50"/>
      <Book name = "React for beginners" year = "2021" price = "60"/>
      <Book name = "Vue for beginners" year = "2022" price = "70"/>
    </div>
  )
}

// ReactDOM.render(React.createElement(App), document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

