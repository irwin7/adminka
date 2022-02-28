import * as React from 'react';
import classes from '../../../assets/style/heading.module.css'

import { IconButton, InputAdornment, InputBase } from '@mui/material';
import Badge from '@mui/material/Badge';

import { BiSearch,BiMessage } from 'react-icons/bi';
import { VscBell } from 'react-icons/vsc';
import { AiOutlinePoweroff } from 'react-icons/ai';

const HomeHeading = () => {
  return (  
    <div className={classes.heading}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search topics"
        inputProps={{ 'aria-label': 'search google maps' }}
        startAdornment={
          <InputAdornment position="start">
            <BiSearch />
          </InputAdornment>
        }
      />
      <div className={classes.btnGroup}>
        <IconButton className={classes.btn} aria-label="bell">
          <Badge badgeContent={4} color="primary">
            <VscBell className={classes.icn} />
          </Badge>
        </IconButton>
        <IconButton className={classes.btn} aria-label="mess">
          <Badge badgeContent={4} color="success">            
            <BiMessage className={classes.icn} />
          </Badge>
        </IconButton>
        <IconButton className={classes.btn} aria-label="off">
          <AiOutlinePoweroff className={classes.icn} />
        </IconButton>
      </div>
    </div>
  );
}

export default HomeHeading