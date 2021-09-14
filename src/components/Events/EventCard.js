import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Card, Typography, Button} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minWidth:270,
    border: '1px solid black',
    // background: 'radial-gradient(#1fe4f5, #3fbafe)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 700,
  },
  btn: {
    marginBottom: '20px',
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EventCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation={3} style={{ background: props.event.bg }} >
      {/* <CardMedia
        className={classes.media}
        image={props.event.image}
        // image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      {/* <CardActions disableSpacing>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton> 
       </CardActions> */}
      <Box m={4}>
      <Grid container justifyContent='center' spacing={3} >
      <Grid item xs={12}>
      <Typography variant='h5' className={classes.heading} >{props.event.name}</Typography></Grid>
      <Grid item xs={12} >
      <Typography>{props.event.description1}</Typography></Grid>
      <Grid container item xs={12} justifyContent='center' >
      <Button variant="contained" color="secondary" className={classes.btn} onClick={handleClickOpen} >
        Read More
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{props.event.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.event.description2}
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </Grid>
      </Grid>
      </Box>
    </Card>
  );
}
