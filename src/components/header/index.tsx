import { AppBar, Button,  IconButton,  Toolbar, Typography } from '@material-ui/core';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import React from 'react';

// import { Container } from './styles';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    margin: '15px 0 5px 45px',
    width: '160px',
    height: '60px',
    objectFit: 'contain'
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  signin: {
    backgroundColor: '#f00',
    color: 'white'
  },
}),
);

const Header: React.FC = () => {
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  const classes = useStyles();
  return (
    <AppBar position="static" style={{backgroundColor: 'transparent', padding: 20}}>
      <Toolbar>
        <IconButton edge="start"color="inherit" aria-label="menu">
          <img alt="logo" src="/logoHeader.png"  className={classes.menuButton}  />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
      
        </Typography>
       
        <Button className={classes.signin} variant="outlined">Entrar</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;