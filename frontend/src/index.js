import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/styles/_reset.scss';
import '../src/assets/styles/_fonts.scss';

import './API/i18n';
import { RouterProvider } from 'react-router-dom';
import router from './components/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Suspense fallback=''>
    <RouterProvider router={router} />
  </React.Suspense>
);
