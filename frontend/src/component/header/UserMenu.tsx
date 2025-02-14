import React from 'react';
import {
  Box, Button, Menu, MenuItem, Tooltip, Typography,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IRootState } from '../../state/store';
import { setLoggedOut } from '../../state/slice/loginSlice';
import ROUTE_CONFIGS from '../../config/routeConfig';

/**
 * Displays the loggedIn User and allows logout
 */
export default function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { email, name } = useSelector((state: IRootState) => state.login);

  const handleNavigateAccount = () => {
    navigate(ROUTE_CONFIGS.ACCOUNT.route);
  };

  const handleNavigateMenu = () => {
    navigate(ROUTE_CONFIGS.MENU.route);
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Actions
  const handleLogout = () => {
    // ToDo 2.6 dispatch setLoggedOut
    dispatch(setLoggedOut());
    handleClose();
    navigate(ROUTE_CONFIGS.INDEX.route);
  };

  return (
    <Box sx={{ textAlign: 'right' }}>

      {/* Display email on hover & activate dropdown on click */}
      <Tooltip title={email}>
        <Button
          onClick={handleOpen}
          color="inherit"
          sx={{
            gap: 1,
            textTransform: 'lowercase',
          }}
        >
          <Typography pt={0.25}>{name}</Typography>
          <AccountCircle />
        </Button>
      </Tooltip>

      {/* The dropdown */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleNavigateMenu}>Menu</MenuItem>
        <MenuItem onClick={handleNavigateAccount}>Account</MenuItem>
        <MenuItem onClick={handleLogout}>Abmelden</MenuItem>
      </Menu>

    </Box>
  );
}
