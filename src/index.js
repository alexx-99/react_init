import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
  </div>
    //html에서 id가 root인 객체를 가져와서 <App /> 컴포넌트를 그 안에 그린다(render).
);
