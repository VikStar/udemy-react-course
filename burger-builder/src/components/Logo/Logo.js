import React from 'react';
import image from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={image} alt="MyBurger" />
    </div>
);

export default Logo;