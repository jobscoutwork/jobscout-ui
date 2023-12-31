import {
	AppBar,
	Avatar,
	Box,
	Button,
	Divider,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
	useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../common/Icons/Logo";
import { Login, Logout, PersonAdd, Settings } from "@mui/icons-material";
import TemporaryDrawer from "../common/TemporaryDrawer";
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
function AppHeader() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLoginClick = () => {
		// console.log("click");
		window.open("/login", "_self" )
		
	};

	const maxWidth = useMediaQuery("(max-width:650px)")
    const responsiveHeader ={
		backgroundColor: "#537188",
		width:"100%",
		
	}
 const desktopHeader ={
	backgroundColor: "#537188"
 }
 const [isDrawerOpen, setDrawerOpen] = useState(false);

 const toggleDrawer = () => {
   setDrawerOpen(!isDrawerOpen);
 };
 const menuItems = [
    { text: 'Profile', icon: <InboxIcon />, onClick: handleClose },
    { text: 'Settings', icon: <MailIcon />, onClick: handleClose },
	{ text: 'Login', icon: <MailIcon />, onClick: handleClose },

    // Add more menu items as needed
  ];
	return (
		<>
		{
			!maxWidth && <AppBar position="sticky"  sx={desktopHeader
	
	
    
			}>
				<Toolbar>
					<Box
						sx={{
							flexGrow: 1,
						}}
					>
						<Logo />
					</Box>
					{
						!maxWidth && <Box
						sx={{
							display: "flex",
							// maxWidth: "620px",
							// width: "100%",
							justifyContent: "flex-end",

							alignItems: "center",
						}}
					>
						<Button
							variant="contained"
							sx={{
								backgroundColor: "#DDE6ED",
								color: "#000",
								textTransform: "capitalize",
								transition: "background-color 0.5s ease",
								"&:hover": {
									backgroundColor: "#abc1d3",
									// backgroundColor: "#bdbdbd",
									// color:"white"
								},
								height: "42px",
								fontSize: "16px",
							}}
							endIcon={<Login />}
							onClick={() => handleLoginClick()}
						>
							Login
						</Button>

						<Tooltip title="Account settings">
							<IconButton
								onClick={handleClick}
								size="small"
								sx={{ ml: 2 }}
								// aria-controls={open ? 'account-menu' : undefined}
								aria-haspopup="true"
								// aria-expanded={open ? 'true' : undefined}
							>
								<Avatar sx={{ width: 42, height: 42 }}>
									T
								</Avatar>
							</IconButton>
						</Tooltip>

						<Menu
							anchorEl={anchorEl}
							id="account-menu"
							open={open}
							onClose={handleClose}
							onClick={handleClose}
							PaperProps={{
								elevation: 0,
								sx: {
									overflow: "visible",
									filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
									mt: 1.5,
									"& .MuiAvatar-root": {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									"&:before": {
										content: '""',
										display: "block",
										position: "absolute",
										top: 0,
										right: 14,
										width: 10,
										height: 10,
										bgcolor: "background.paper",
										transform:
											"translateY(-50%) rotate(45deg)",
										zIndex: 0,
									},
								},
							}}
							transformOrigin={{
								horizontal: "right",
								vertical: "top",
							}}
							anchorOrigin={{
								horizontal: "right",
								vertical: "bottom",
							}}
						>
							<MenuItem onClick={handleClose}>
								<Avatar /> Profile
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Avatar /> My account
							</MenuItem>
							<Divider />
							<MenuItem onClick={handleClose}>
								<ListItemIcon>
									<PersonAdd fontSize="small" />
								</ListItemIcon>
								Add another account
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<ListItemIcon>
									<Settings fontSize="small" />
								</ListItemIcon>
								Settings
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<ListItemIcon>
									<Logout fontSize="small" />
								</ListItemIcon>
								Logout
							</MenuItem>
						</Menu>
					</Box>
					}
					
				</Toolbar>
				</AppBar>
		}

		{
			maxWidth && <AppBar position="sticky"  sx={
  
				responsiveHeader
				
				
				
			  }>
							<Toolbar>
								<Box
									sx={{
										flexGrow: 1,
									}}
								>
									<Logo />
								</Box>
								<Tooltip title="Account settings">
							<IconButton
								onClick={handleClick}
								size="small"
								sx={{ ml: 2 }}
								// aria-controls={open ? 'account-menu' : undefined}
								aria-haspopup="true"
								// aria-expanded={open ? 'true' : undefined}
							>
								<Avatar sx={{ width: 42, height: 42 }}>
									T
								</Avatar>
							</IconButton>
						</Tooltip>

						<Menu
							anchorEl={anchorEl}
							id="account-menu"
							open={open}
							onClose={handleClose}
							onClick={handleClose}
							PaperProps={{
								elevation: 0,
								sx: {
									overflow: "visible",
									filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
									mt: 1.5,
									"& .MuiAvatar-root": {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									"&:before": {
										content: '""',
										display: "block",
										position: "absolute",
										top: 0,
										right: 14,
										width: 10,
										height: 10,
										bgcolor: "background.paper",
										transform:
											"translateY(-50%) rotate(45deg)",
										zIndex: 0,
									},
								},
							}}
							transformOrigin={{
								horizontal: "right",
								vertical: "top",
							}}
							anchorOrigin={{
								horizontal: "right",
								vertical: "bottom",
							}}
						>
							<MenuItem onClick={handleClose}>
								<Avatar /> Profile
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Avatar /> My account
							</MenuItem>
							<Divider />
							<MenuItem onClick={handleClose}>
								<ListItemIcon>
									<PersonAdd fontSize="small" />
								</ListItemIcon>
								Add another account
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<ListItemIcon>
									<Settings fontSize="small" />
								</ListItemIcon>
								Settings
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<ListItemIcon>
									<Logout fontSize="small" />
								</ListItemIcon>
								Login
							</MenuItem>
						</Menu>
								
								{/* {maxWidth && (
  <React.Fragment>
    <TemporaryDrawer anchor={<MenuIcon sx={{
		color:"white"
	}} />} menuItems={menuItems} open={isDrawerOpen} onClose={toggleDrawer}/>
   
  </React.Fragment>
)} */}


							</Toolbar>
						</AppBar>
		}
			
		</>
	);
}

export default AppHeader;
