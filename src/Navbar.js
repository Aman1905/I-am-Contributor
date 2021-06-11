import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './assets/logow.png'

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

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="fixed" color="inherit" >
                <Toolbar>
                <img src= {logo} height="55px" edge="start" className={classes.menuButton} aria-label="menu"/>
                    <Typography variant="h6" className={classes.title}>
                        I am a Contributor 😃
                    </Typography>
                </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Navbar
