import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

const Index = () => <App title="Hello World" />;

ReactDOM.render(<Index />, document.getElementById('root'));
