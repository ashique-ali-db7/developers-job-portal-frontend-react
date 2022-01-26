import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import githublogo from './githubimage.png';
import './SignupForm.css';
import {useState,useEffect} from 'react';
import { useNavigate} from "react-router-dom";
const axios = require('axios');

const theme = createTheme();

export default function SignUp() {

  const navigation = useNavigate();
  const [isSubmit,setSubmit] = useState(false)

  const initialValues = {name:"",email:"",password:""}
  const [formValues,setFormValues] = useState(initialValues);

  const [formErrors,setFormErrors] = useState({})

  const handleChange=(e)=>{

    const {name,value} = e.target
    setFormValues({...formValues,[name]:value})
    console.log(formValues);
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      setFormErrors(validate(formValues))
      setSubmit(true)
    }

    const validate = (values) =>{
      const errors = {}
 const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!values.name){
        errors.name = "This field is required";
      }
      if(!values.email){
        errors.email = "This field is required";
      }
     
      if(!values.email){
        errors.password = "This field is required";
      }
      return errors
    }


useEffect(()=>{


  if(Object.keys(formErrors).length === 0 && isSubmit){
try{
  const config = {
    headers:{
      "Content-type":"application/json"
    }
  }

  axios.post('/signup',formValues,config)

setSubmit(false)
navigation('/otp')
}catch{
  console.log("hi");
  setSubmit(false)
}

  }


},[isSubmit])



  return (
     
    <ThemeProvider theme={theme}>
     
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}

        >
         
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Button
             
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            
              style={{backgroundColor:"black"}} 
            >
    <img src={githublogo} alt="" className='githubLogo  me-auto'/> <span className='me-auto'>Create account with github</span> 
            </Button>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              onChange={handleChange}
              autoFocus
              
            />
           <p style={{color:"red"}}>{formErrors.name}</p> 
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              autoFocus
            />
          <p style={{color:"red"}}>{formErrors.email}</p> 
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange={handleChange}
              type="password"
              id="password"
              autoComplete="current-password"
            />
          
           <p style={{color:"red"}}> {formErrors.password}</p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className='signupbutton'
              style={{backgroundColor:"#3FA796"}}
            >
              SIGN Up
            </Button>
            <Grid container>
              <Grid item xs>
               
              </Grid>
              <Grid item>
                <Link style={{cursor:"pointer",textDecoration:"none"}} onClick={()=>{
navigation("/signin")
                }} variant="body2">
                  {"Already have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}