import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography, useMediaQuery, Dialog, DialogTitle, DialogContent, DialogActions, Button, styled } from '@mui/material';
import TemporaryDrawer from './HamburgerMenu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Navbar(props) {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [phoneDialogOpen, setPhoneDialogOpen] = useState(false);
    const [emailDialogOpen, setEmailDialogOpen] = useState(false);

    const handlePhoneDialogOpen = () => setPhoneDialogOpen(true);
    const handlePhoneDialogClose = () => setPhoneDialogOpen(false);

    const handleEmailDialogOpen = () => setEmailDialogOpen(true);
    const handleEmailDialogClose = () => setEmailDialogOpen(false);

    return (
        <div>
            <AppBar position="fixed" sx={{ height: '60px', lineHeight: '50px', padding: '4px' }}>
                <Toolbar variant="dense" sx={{ marginTop: '2px' }}>
                    <TemporaryDrawer 
                        aboutRef={props.aboutRef}
                        workExRef={props.workExRef}
                        projectsRef={props.projectsRef}
                        publicationsRef={props.publicationsRef}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        <Typography variant="h6" color="inherit">
                            Sahil Nawale
                        </Typography>
                        <div>
                            <IconButton href='https://linkedin.com/in/sahilnawale' sx={{ padding: isSmallScreen ? '4px' : '8px' }}>
                                <LinkedInIcon style={{ color: "#4390ff", fontSize: isSmallScreen ? '20px' : '24px' }} />
                            </IconButton>
                            <IconButton href='https://github.com/SahilNawale' sx={{ padding: isSmallScreen ? '4px' : '8px' }}>
                                <GitHubIcon style={{ fontSize: isSmallScreen ? '20px' : '24px' }} />
                            </IconButton>
                            {isSmallScreen ? (
                                <>
                                    <IconButton sx={{ padding: '4px' }} onClick={handlePhoneDialogOpen}>
                                        <PhoneIcon style={{ fontSize: '20px' }} />
                                    </IconButton>
                                    <Dialog open={phoneDialogOpen} onClose={handlePhoneDialogClose}>
                                        <DialogTitle>Contact Information</DialogTitle>
                                        <DialogContent>
                                            <Typography>Phone: +91 7499850363</Typography>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handlePhoneDialogClose} color="primary">Close</Button>
                                        </DialogActions>
                                    </Dialog>

                                    <IconButton sx={{ padding: '4px' }} onClick={handleEmailDialogOpen}>
                                        <EmailIcon style={{ fontSize: '20px' }} />
                                    </IconButton>
                                    <Dialog open={emailDialogOpen} onClose={handleEmailDialogClose}>
                                        <DialogTitle>Contact Information</DialogTitle>
                                        <DialogContent>
                                            <Typography>Email: sahil.nawale@stonybrook.edu</Typography>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleEmailDialogClose} color="primary">Close</Button>
                                        </DialogActions>
                                    </Dialog>
                                </>
                            ) : (
                                <>
                                    <IconButton sx={{ padding: '8px' }}>
                                        <PhoneIcon style={{ fontSize: '24px' }} />
                                        <span style={{ fontFamily: "trebuchet MS", fontStyle: "italic", fontSize: 'small' }}> &nbsp;+91 7499850363</span>
                                    </IconButton>
                                    <IconButton sx={{ padding: '8px' }}>
                                        <EmailIcon style={{ fontSize: '24px' }} />
                                        <span style={{ fontFamily: "trebuchet MS", fontStyle: "italic", fontSize: 'small' }}> &nbsp;sahil.nawale@stonybrook.edu</span>
                                    </IconButton>
                                </>
                            )}
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
