import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));
export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: '#ffffff' }} >
          <IconButton edge="start" className={classes.menuButton} style={{ backgroundColor: '#63b3ed', color: '#FFFFFF' }} aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuList>
              {props.users.map(user => (
                <MenuItem>{user.name}</MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Typography variant="h6" className={classes.title} style={{ color: '#000000' }}>
            {props.room}
          </Typography>
          <Button href="/" style={{ backgroundColor: '#edf2f7', color: '#728096' }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );

}

