import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import client from './client';
import { ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider는 기본적으로 애플리케이션안의 모두가 이 clent에 접근할 수 있게 해준다.
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
