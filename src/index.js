import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContentDistributer from './contentDistribution';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      
      main: '#E6F6FC'
    },
    secondary: {
     
      main: '#2F9CD4'
    }
  }
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContentDistributer/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
