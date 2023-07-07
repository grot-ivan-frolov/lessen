import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShopItemFunc from './components/App';
import item from './components/ShopItemFunc/ShopItemFunc';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ShopItemFunc item={item}/>
  </>
);


