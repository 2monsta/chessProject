import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App knightPosition={[0,0]}/>, document.getElementById('root'));
registerServiceWorker();
