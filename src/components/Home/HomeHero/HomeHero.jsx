import React from 'react';
import classes from "../../../assets/style/home-hero.module.css";
import HomeHeading from '../HomeHeading/HomeHeading';
import HomeHeroInner from './HomeHeroInner';
import EnhancedTableHead from './Posts/HomeHeroPosts';

export const HomeHero = () => {
  return (
    <div className={classes.hero}>
      <HomeHeading />
      <HomeHeroInner />
      <EnhancedTableHead />
    </div>
  )
}
