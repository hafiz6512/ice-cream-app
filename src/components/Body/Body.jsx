import React from 'react';
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder';
import JobListBuilder from '../../containers/JobListBuilder/JobListBuilder';
import classes from './Body.module.css';

const Body = () => {
    return (
        <div className={classes.mainBody}>
            <IceCreamBuilder />
            <JobListBuilder />
        </div>
    );
};

export default Body;
