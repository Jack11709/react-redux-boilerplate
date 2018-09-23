import React from 'react';
import PropTypes from 'prop-types';
import style from './app.css';

const App = (props) => {
  const { title } = props;
  return (
    <h1 className={style.title}>{title}</h1>
  );
};

App.defaultProps = {
  title: 'Hello World'
};

App.propTypes = {
  title: PropTypes.string
};

export default App;
