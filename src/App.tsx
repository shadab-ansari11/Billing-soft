import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Application from './navigation';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ErrorBoundary>
      <>
        <Application />
        <ToastContainer position="top-right"  autoClose={3000}/>
      </>
    </ErrorBoundary>
  );
}

export default App;
