import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollToTop from 'react-scroll-to-top';
import { Routers } from './routers';
import { Provider } from './provider';
import reportWebVitals from './reportWebVitals';
import './assets/style/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider>
      <Routers />
      <ScrollToTop
        smooth
        color="#A259FF"
        width="24"
        height="24"
        className="rounded-full flex justify-center items-center w-[50px] h-[50px]"
      />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
