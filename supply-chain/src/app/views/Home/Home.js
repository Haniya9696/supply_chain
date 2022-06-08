import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

function Home() {
    return (
        <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" component={Link} to="sign-in" sx={{ mx:1, mt:30, p:2, fontSize:"18px"}}>Manufacturer</Button>
            <Button variant="contained" component={Link} to="sign-up"sx={{ mx:1, mt:30,p:2, fontSize:"18px"}}>Distributer</Button>
           
        </Box>

    );
}
export default Home
