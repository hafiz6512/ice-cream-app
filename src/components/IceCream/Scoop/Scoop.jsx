import React from 'react';
import classes from './Scoop.module.css';

const Scoop = ({ scoop }) => {
    return <div className={['scope-item', classes.scoop, classes[scoop]].join(' ')} />;
};

export default Scoop;
