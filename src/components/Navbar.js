import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Grid, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Auth } from 'aws-amplify';

function NavBar({ numberOfCartItems }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    checkCurrentUser();
  }, []);

  const checkCurrentUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    }
  };

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleNavLinkClick = (path) => {
    navigate(path);
    handleDrawerClose();
  };

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const navLinks = (
    <List sx={{ display: 'flex' }}>
      <ListItem button onClick={() => handleNavLinkClick('/home')}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={() => handleNavLinkClick('/about')}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button onClick={() => handleNavLinkClick('/purchase')}>
        <ListItemText primary="Purchase" />
      </ListItem>
      <ListItem button onClick={() => handleNavLinkClick('/cart')}>
        <ListItemText primary="Cart" />
      </ListItem>
      <ListItem button onClick={() => handleNavLinkClick('/admin')}>
        <ListItemText primary="Admin" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000', minHeight: '80px' }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid item>
            <Typography variant="h4" sx={{ color: '#f5b921', cursor: 'pointer' }} onClick={() => navigate('/')}>
              RM Hub
            </Typography>
          </Grid>

          <Grid item>
            {user ? (
              <Button color="inherit" onClick={handleSignOut}>Log Out</Button>
            ) : (
              <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
            )}
          </Grid>
        </Grid>

        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <List sx={{ width: 250 }}>
            <ListItem button onClick={() => handleNavLinkClick('/home')}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleNavLinkClick('/about')}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => handleNavLinkClick('/purchase')}>
              <ListItemText primary="Purchase" />
            </ListItem>
            <ListItem button onClick={() => handleNavLinkClick('/cart')}>
              <ListItemText primary="Shopping Cart" />
            </ListItem>
            <ListItem button onClick={() => handleNavLinkClick('/admin')}>
              <ListItemText primary="Admin" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
