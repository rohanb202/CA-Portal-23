import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <AuthProvider>
      <App />
    </AuthProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);



// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<App />} />
//       {/* <Route path="/login" element={<Login />} /> */}
//       </Routes>
//   </BrowserRouter>, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
