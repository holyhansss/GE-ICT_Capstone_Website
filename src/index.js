import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import authSlice from './features/login_state';
import { ThemeProvider, unstable_createMuiStrictModeTheme} from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";

const theme = unstable_createMuiStrictModeTheme();

const store = configureStore({
  reducer: {
    authSlice: authSlice
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
