import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
  root: {
    backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
      fontFamily:'Roboto,sans-serif',
      width:100,
      height:100,
    borderRadius:'8px',
    [theme.breakpoints.up('sm')]: {
        width:200,
        height:200,
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize:'10px',
    color:'#fff',
    fontWeight:600,
    [theme.breakpoints.up('sm')]: {
        fontSize:'38px',
    },
  },
  pos: {
    marginBottom: 12,
    fontSize:'8px',
    color:'#fff',
    [theme.breakpoints.up('sm')]: {
        fontSize:'16px',
    },
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
       
        <Typography className={classes.title} variant="h5" component="h2">
         500+
         <br/>
         Students
        </Typography>
        <hr/>
        <Typography className={classes.pos} color="textSecondary">
          Placed
        </Typography>
      </CardContent>
      
    </Card>
  );
}
