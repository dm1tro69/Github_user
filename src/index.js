import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
const domain = process.env.REACT_APP_DOMAIN
const client_id = process.env.REACT_APP_CLIENT_ID
//dev-m54p3u5r.eu.auth0.com
//cNO1bIltSRJmoyLPiP2EsJ4M9geQghZ2

ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
          cacheLocation={'localstorage'}
          domain={domain}
          clientId={client_id}
          redirectUri={window.location.origin}>
          <GithubProvider>
              <App />
          </GithubProvider>
      </Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
