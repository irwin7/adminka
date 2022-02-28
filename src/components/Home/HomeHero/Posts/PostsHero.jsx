import React, {useContext, useRef} from 'react'


import { Checkbox,InputAdornment,InputLabel,OutlinedInput,FormControl,Box,Button,Stack, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from '@mui/material';

import { BiSearch } from 'react-icons/bi';

import classes from '../../../../assets/style/post-hero.module.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { Context } from './../../../Contexts/Context';


import Modal from '@mui/material/Modal';
import { useEffect } from 'react';

const PostsHero = () => {

  const {posts,setPosts,oldPosts,setOldPosts} = useContext(Context);  
  
  const inpType = (e) => {
    console.log();
    if(e.target.value.length > 0){
      setOldPosts(
        posts.filter((item) => item.name.includes(e.target.value))
      )
    }else{
      setOldPosts(posts)
    }
  }
    
  // modal
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display:"flex",
    alignItems:"center",
    transform: 'translate(-50%, -50%)',
    width: "70%",
    height: "75%",
    bgcolor: '#fff',
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  const modalFormRef = useRef();

  const [open, setOpen] = React.useState(false);
  const [depart, setDepart] = React.useState('');

  const modalHandler = () => {
    setOpen(!open)
  }

  const handleChange = (event) => {
    setDepart(event.target.value);
  };

  const inpSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e)
  }


  return (
    <div className={classes.hero}>
      <Box sx={{ display: 'flex', p: '30px 40px' }}>
        <FormControl sx={{marginRight:"auto", width: "80%"}} >
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <BiSearch />
              </InputAdornment>
            }
            onChange={inpType}
            label="Search Employees"
          />
        </FormControl>
        <Stack direction="row" spacing={2}>
          <Button color="info" onClick={modalHandler} variant="outlined" startIcon={<AiOutlinePlus />}>
            Add New
          </Button>
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={modalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit = {inpSubmitHandler} style={{display: "flex",alignItems: "center"}}>
            <Box sx={{width:'50%',p:"20px 40px"}}>
              <TextField fullWidth style={{marginBottom: "10px"}} name="name" label="Full Name" variant="outlined" />
              <TextField fullWidth style={{marginBottom: "10px"}} name="email" label="Email" variant="outlined" />
              <TextField fullWidth style={{marginBottom: "10px"}} name="mobile" type="tel" label="Mobile" variant="outlined" />
              <TextField fullWidth style={{marginBottom: "10px"}} label="City" variant="outlined" />
            </Box>
            <Box sx={{width:'50%',p:"20px 40px"}}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                row
                style={{marginBottom: "10px"}}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
              <FormControl fullWidth  style={{marginBottom: "10px"}}>
                <InputLabel name="department" id="demo-simple-select-label">Department</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Department"
                  value={depart}
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="development">Development</MenuItem>
                  <MenuItem value="marketing">Marketing</MenuItem>
                  <MenuItem value="accounting">Accounting</MenuItem>
                  <MenuItem value="hr">HR</MenuItem>
                </Select>
              </FormControl>
              <TextField fullWidth type="date" variant="outlined" />
              <FormControlLabel control={<Checkbox />} label="Permanent Employee" />
              <Button variant="contained" type="submit">Submit</Button>
              <Button variant="contained" type="reset">Rest</Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default PostsHero