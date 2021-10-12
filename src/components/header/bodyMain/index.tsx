import { Button, Container, createStyles, Input, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// import { Container } from './styles';
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh'
  },
  content:{
   marginTop: -50
  },
  title: {
    maxWidth: '850px',
    fontSize: '4.0em',
    fontWeight: 650
  },
  subtitle: {
    marginTop: -30,
    fontSize: '2em',
    fontWeight: 500
  },
  paragraph: {
    fontSize: '1.4em',
    fontWeight: 450
  },
  searchInput: {
    height: '70px'
  },
  input: {
    width: '70%',
    height: '100%',
    padding: '15px',
    fontSize: '20px',
    backgroundColor: '#fff'
  },
  button: {
    width: '30%',
    color: 'white',
    marginTop: '-3px',
    backgroundColor: '#cd041f',
    height: '69px',
    fontSize: '1em',

    '&:hover': {
      backgroundColor: '#f00'
    }
  }
}),
);
const BodyMain: React.FC = () => {
  const classes = useStyles();  
  return (
    <Container className={classes.root}>
     <div className={classes.content}>
        <h1 className={classes.title}>Filmes, séries e muito mais. Sem limites.</h1>
        <h2 className={classes.subtitle}>Assista onde quiser. Cancele quando quiser.</h2>
        <p className={classes.paragraph}>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
        <div>
          <Input placeholder="Email" className={classes.input}/>
          <Button className={classes.button} variant="contained">
            Vamos Lá
            <ChevronRightIcon fontSize="large"/>
          </Button>
        </div>
     </div>
    </Container>
  );
}

export default BodyMain;