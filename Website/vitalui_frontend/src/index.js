import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//fonts
import './fonts/MoskMedium500.ttf';

import RoutesPages from './scripts/RoutesPages';

export default function App(){
  return(
    <RoutesPages/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
