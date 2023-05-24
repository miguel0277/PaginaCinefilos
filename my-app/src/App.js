import React from 'react';
import Layout from './Layout';

import './App.css';



function App() {
  function redirectToLogin() {
    window.location.href = './login.html';
  }

  function redirectToSignup() {
    window.location.href = "./register.html";
  }
  return (
    <Layout redirectToLogin={redirectToLogin} redirectToSignup={redirectToSignup}>
    </Layout>
  );
}

export default App;

