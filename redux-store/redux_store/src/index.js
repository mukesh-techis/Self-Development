import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/store";
import { Provider } from 'react-redux';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container=document.getElementById("root");
const rootContainer=ReactDOM.createRoot(container);
rootContainer.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
     </Provider>
  </React.StrictMode>
);

