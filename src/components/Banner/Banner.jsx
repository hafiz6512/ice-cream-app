import React from 'react';
import bannerImg from '../../assets/images/banner-img.jpg';
import classes from './Banner.module.css';

const Banner = () => {
    return(
        <div className={classes.banner}>
            <div className={['container', classes.container].join(' ')}>
                <img src={bannerImg} alt="Banner"/>
            </div>
        </div>
    );
};

export default Banner
