import React from 'react';
import classes from '../../../assets/style/home-hero-inner.module.css'

import { FaUsers } from 'react-icons/fa';

const HomeHeroInner = () => {
  return (
    <div className={classes.inner}>
      <div className={classes.acc}>
        <FaUsers className={classes.icn} />
      </div>
      <div>
        <h2 className={classes.title}>New Employee</h2>
        <p className={classes.text}>Form design with validation</p>
      </div>
    </div>
  )
}

export default HomeHeroInner