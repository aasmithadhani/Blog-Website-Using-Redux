import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { color, Container } from "@mui/system";
import TextField from '@mui/material/TextField';

import { useState } from "react";


import Sheet from "@mui/joy/Sheet";
import Blog from "./Blog";



import {Add} from "./redux/actions/Action"
import {useDispatch,useSelector} from 'react-redux';




const Home = () =>
{

    const dispatch= useDispatch();
    const[data,setData]=useState({title:"",content:""})

    const {User_data}= useSelector((state)=> state.postsRed);



    const handleChange =(e)=>
    {
        setData((prevState)=>({
            ...prevState,
            [e.target.name]:[e.target.value]
      
           }))

    }

    console.log(data);



    const addData =()=>
    {
        dispatch(Add(data));
       

        
    }


    return (
    <Box>

        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >

            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Number of blogs:{User_data.length}
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        
        <Sheet
         sx={{
            width: 500,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
         >
        <h1 >Add a Blog</h1>
        <TextField
          id="standard-multiline-static"
         placeholder="title"
         name="title"
         value={data.title}
         onChange={handleChange}
         
          rows={1}
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
         placeholder="content"
         name="content"
         onChange={handleChange}
         value={data.content}
          multiline
          rows={8}
          variant="standard"
        />
        <Button style={{color:'white',background:'blue'}} onClick={addData} >ADD</Button>
        </Sheet>
        <Blog/>
    </Box>

    );
}

export default Home;