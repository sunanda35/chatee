import React from 'react';
import './App.css';
import QRCode from "react-qr-code";

function App() {
  return (
     <div className="App">
            <header className="App-header">
              <h1>CHATTY</h1>
              <QRCode  value="hey"/>
            </header>
        </div>
  );
}

export default App;
