import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import HashLoader from "react-spinners/HashLoader";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(true);
  const [loading,setLoading] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, [])
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
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
        <DialogTitle id="alert-dialog-slide-title">{"Wait while we get ready with your diagnostics"}</DialogTitle>
        <DialogContent>
        </DialogContent>
      </Dialog>
    </div>
  );
}
