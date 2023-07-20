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


import Modal from '@mui/material/Modal';
import { blue } from "@mui/material/colors";

import './Blog.css'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    // bgcolor: 'black',
    border: '2px solid #000',
    
    boxShadow: 24,
    p: 4,
  }
const Home = () =>
{

    const dispatch= useDispatch();
    const[data,setData]=useState({title:"",content:""})

    const [show,setShow]= useState(false);

    const {User_data}= useSelector((state)=> state.postsRed);



    const handleChange =(e)=>
    {
        setData((prevState)=>({
            ...prevState,
            [e.target.name]:[e.target.value]
      
           }))

    }

    console.log(data);

    const handleShow = (el) =>
    {
        setShow(true);
        
    }

    const handleClose = () => setShow(false);


    const addData =()=>
    {
        dispatch(Add(data));
        handleClose();
       

        
    }


    
if (User_data.length==0)
{
  return(

    <>

{/*     
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
            <Button color="inherit" 
            onClick={handleShow}
            >Add</Button>
            </Toolbar>
        </AppBar> */}

        <Modal
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         open ={show}>

        {/* <Sheet
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
         > */}
         <Box sx={style}>

         
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
        <Button className="button2" onClick={addData} >ADD</Button>
        <Button className="button2" onClick={handleClose} sx={{ml:1}} >Close</Button>
        {/* </Sheet> */}
        </Box>

        </Modal>
        

    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
				<h2>You have no Blogs Currently</h2>
			</div>
      <Button className="button"
      onClick={handleShow}>
        Add a Blog First to get started
      </Button>
			
		</div>
	</div>

        </>

  )
}


    return (
    <Box>

        <AppBar position="static" className="navbar">
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
            <Button color="inherit" 
            onClick={handleShow}
            className="button1"
            >Add</Button>
            </Toolbar>
        </AppBar>
        
        <Modal
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         open ={show}>

        {/* <Sheet
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
         > */}
         <Box sx={style}>

         
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
        <Button className="button2" onClick={addData} >ADD</Button>
        <Button className="button2" onClick={handleClose} sx={{ml:1}} >Close</Button>
        {/* </Sheet> */}
        </Box>

        </Modal>
     
        <Blog/>
    </Box>

    );
}

export default Home;