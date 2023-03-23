import React, { useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import Link from 'next/link';


interface SignupData {

  email: string;
  password: string;
}

const SignupPage = () => {
  const [signupData, setSignupData] = useState<SignupData>({
    email: '',
    password: '',
  });

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('https://clarkifre.pythonanywhere.com/auth/signup', signupData);
      console.log(response.data); 
    } catch (error) {
      console.error(error); 
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSignup}>
       <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}


>

      <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  mt={20}



>
<h1>Sign up</h1>

      <Box>
      
        <TextField
        label="email"
          type="email"
          id="email"
          name="email"
          value={signupData.email}
          onChange={handleInputChange}
        />
      </Box>
      <Box >
       
        <TextField
        label="password"
        type="password"
        id="password"
        name="password"
        value={signupData.password}
        onChange={handleInputChange}
        />
      </Box>
      <Button type="submit"  style={{marginBottom: "40px"}} variant="contained" color="success">Sign up</Button>
      <Stack
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  spacing={2}
>
      already have an account <Link href="/login">Login</Link>
</Stack>
</Stack>

  
       
        </Stack>
    </form>
  );
};

export default SignupPage;
