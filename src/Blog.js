import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


import {useDispatch,useSelector} from 'react-redux';
import { Grid } from "@mui/material";


import {Remove,Update_data} from "./redux/actions/Action"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }





const Blog =()=>
{

    const {User_data}= useSelector((state)=> state.postsRed);
    console.log(User_data);


    const dispatch = useDispatch();

    const remove = (id) =>
    {
        dispatch(Remove(id))
    }

    const [show,setShow]= useState(false);
    const [update,setUpdate]=useState("");
    const [ind,setInd] = useState("");

    const handleShow = (el) =>
    {
        setShow(true);
        setUpdate(el);
    }


    const handleChange =(e)=>
    {
        setUpdate((prevState)=>({
            ...prevState,
            [e.target.name]:[e.target.value]
      
           }))

    }


const handleClose = () => setShow(false);
   

const usertask_update = ()=>
{
    dispatch(Update_data(update,ind))
    handleClose();
}
    return (
        <>
         <Grid container >
            {
                User_data.map((ele,k)=>
                {
                    return(
                        <>
                         <Card sx={{ width: 450 ,height:350}} style={{marginLeft:19, marginTop:19}} key={k}>
                <CardHeader
                title={ele.title}
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {ele.content}
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <IconButton aria-label="edit">
                    <EditIcon onClick ={()=>{ 
                        handleShow(ele);
                        setInd(k);
                    }}/>
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon onClick={()=>remove(k)}/>
                </IconButton>
                
                </CardActions>
            
            </Card>

                        </>
                    )
                })
            }



       
      </Grid>


      


      <Modal
        // open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open ={show}
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
           UPDATE:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <TextField
          id="standard-multiline-static"
         placeholder="title"
         name="title"
         value={update.title}
         onChange={handleChange}
         
          rows={1}
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
         placeholder="content"
         name="content"
         onChange={handleChange}
         value={update.content}
          multiline
          rows={8}
          variant="standard"
        />
          <Button onClick ={handleClose}>close</Button>
          <Button onClick ={usertask_update}>Save Changes</Button>
          
        </Box>
        
      </Modal>
        </>
       
      

    )
}

export default Blog;