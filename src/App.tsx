import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Application from './navigation';

function App() {
  return (
    <ErrorBoundary>
      <>
        <Application />
      </>
    </ErrorBoundary>
  );
}

export default App;
