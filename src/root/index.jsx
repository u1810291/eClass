import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../containers/App';
import store from '../redux/store';
import { ViewportProvider } from '../hooks/use-window-size';
import Modal from '../components/Modals/Blured';
import FullPage from '../components/Modals/FullPage';

export default () => (
  <Provider store={store}>
    <ViewportProvider>
      <Router>
        <App />
        <Modal />
        <FullPage />
      </Router>
    </ViewportProvider>
  </Provider>
);
