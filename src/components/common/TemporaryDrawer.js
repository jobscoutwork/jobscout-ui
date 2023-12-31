import React from 'react';
import { Box, Drawer, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedButton from './OutlinedButton';
import PrimaryButton from './PrimaryButton';
export default function TemporaryDrawer({ anchor, menuItems, open, onClose }) {
  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    onClose();
  };

  const list = (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 ,p:2,mt:4}}
      role="presentation"
     
    >
      <Box sx={{
 mb:2,
 mt:-2,
 display:"flex",
justifyContent:"flex-end"
      }}  onClick={toggleDrawer}
      onKeyDown={toggleDrawer}> 
  <IconButton ><CloseIcon/></IconButton>
      </Box>
    
      <List>
       
        {menuItems}
      </List>
      <Box sx={{
        position:"fixed",
        bottom:0,
        pb:2,
        display:"flex",
        width:"80%",
        pl:2

        
      
      }}>
        <OutlinedButton sx={{
height:"42px",
mr:2,




        }}>Clear Filters</OutlinedButton>
        <PrimaryButton sx={{
       
        }}>Apply Filters</PrimaryButton>


      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      <IconButton sx={{
      // ml: "20%",
      // mr: 1
    }} onClick={toggleDrawer}>
        {anchor} 
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        {list}
      </Drawer>
     
    </React.Fragment>
  );
}
