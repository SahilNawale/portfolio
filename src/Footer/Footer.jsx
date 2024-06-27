import React, { Component }  from 'react';
import { Paper, Typography } from '@mui/material'

function Footer() {
    return (
        <div style={{bottom:"0px"}}>  
            <Paper elevation={6} style={{width:"100%",textAlign:"center",lineHeight:'50px',background:"#161515",color:"grey",padding:'15px 0px'}}><Typography>Copyright Ltd 2021 | All Rights Reserved | Sahil Nawale</Typography></Paper>
        </div>
    )
}

export default Footer
