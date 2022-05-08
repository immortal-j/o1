import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import HashLoader from "react-spinners/HashLoader";
import {Grid} from '@material-ui/core'

const messages = ["fetching your data...", "creating your analysis...", "Showing it to you..."];


const Loader = props => {
  const { messages } = props;
  const [messageIndex, setMessageIndex] = React.useState(0);

  React.useEffect(() => {
    let timeout;
    if (messageIndex < messages.length - 1) {
      timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, messageIndex]);
  return <Grid container item>
  <Grid container xs={0} sm={3} >
  </Grid>
  <Grid item container xs={12} sm={6}>
    <Grid item container xs={0} sm={1}></Grid>
    <Grid item container xs={12} sm={10} justifyContent='center' style={{textAlign:'center'}} >{messages[messageIndex]}</Grid>
    <Grid item container xs={0} sm={1}></Grid>
  </Grid>
  <Grid item container xs={0} sm={3} >
  </Grid>
  </Grid> 
};


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(true);
  const [loading,setLoading] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Dialog 
        disableBackdropClick 
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="AnalysisLoader" >
        <HashLoader color={"#8739f9"} loading={loading} size={85}   />
        </div>
        <DialogTitle id="alert-dialog-slide-title">
          <Loader messages={messages} />
        </DialogTitle>
        <DialogContent>
        </DialogContent>
      </Dialog>
    </div>
  );
}
