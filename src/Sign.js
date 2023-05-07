import React from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { textAlign } from '@mui/system';

import Validation from './Validation'
import Link from '@mui/joy/Link';
import { useState } from 'react';
import axios from 'axios';

import "./errors.css"



const Sign = () => {


  const [isSignup,setIsSignup]= useState(false);

  const [inputs,setInputs]=useState({
    fname:"",lname:'',phone:'', email:"",password:"",gender:'',date:''});


    

    const handleChange = (e) => {
   
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:[e.target.value]

     }))
    };
    console.log(inputs)


    const [errors,setErrors]=useState({});


    const handleSubmit =(e)=>
    {
      e.preventDefault();
      console.log(inputs);    
      setErrors(Validation(inputs));
     
    }
  return (
    <CssVarsProvider>
   <main>

   
  
    <Sheet
          sx={{
            width: 700,
            mx: 'auto', // margin left & right
            my: 3, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
    >
     

     <Link href="./">
      <Button sx={{ mt: 1 ,width:150}} >
     Go back
    </Button>
    </Link>
    




    <div>
        <Typography level="h4" component="h1">
            <b>SIGN UP TO CONTINUE</b>
        </Typography>
    </div>



    <TextField
        name="fname"
        type="text"
        placeholder='First Name'
        label="First Name"
        onChange={handleChange}
        value={inputs.fname}
    />

          {errors.fname && <p className="error">{errors.fname}</p>}

    <TextField
        name="lname"
        type="text"
        placeholder='Last Name'
        label="Last Name"
        onChange={handleChange}
        value={inputs.lname}
    />

      {errors.fname && <p className='error'>{errors.lname}</p>}

    <TextField
        name="phone"
        type={'phone'}
        placeholder="Enter Phone No"
        label="Phone No"
        value={inputs.phone}
        onChange={handleChange}
    />
      {errors.phone && <p className='error'>{errors.phone}</p>}




    <TextField
        name="email"
        type="email"
        placeholder="johndoe@email.com"
        // pass down to FormLabel as children
        label="Email"
        onChange={handleChange}
        value={inputs.email}
    />
      {errors.email && <p className='error'>{errors.email}</p>}


    <TextField
        name="password"
        type="password"
        placeholder="password"
        label="Password"
        onChange={handleChange}
        value={inputs.password}
    />
    {errors.password && <p className='error'>{errors.password}</p>}
      
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        defaultValue="female"
        // name="controlled-radio-buttons-group"
        name="gender"
        value={inputs.gender}
        // value={value}
        onChange={handleChange}
        sx={{ my: 1 }}
      >
        <Radio value="female" label="Female" />
        <Radio value="male" label="Male" />
        <Radio value="other" label="Other" />
      </RadioGroup>
    </FormControl>
    {errors.gender && <p className='error'>{errors.gender}</p>}

    <TextField
        id="date"
        label="Birthday"
        type="date"
        name="date"
        value={inputs.date}
        defaultValue="2017-05-24"
        onChange={handleChange}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
    />
      {errors.date && <p className='error'>{errors.date}</p>}


    <Button sx={{ mt: 1 ,width:150}} onClick={handleSubmit}>
     Sign up
    </Button>

      

    </Sheet>
   </main>
   </CssVarsProvider>
  )
}


export default Sign