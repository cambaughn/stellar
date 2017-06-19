import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import store from './redux/store';

const renderApp = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(renderApp);
renderApp();
