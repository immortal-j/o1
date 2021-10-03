import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { Container, Button, Box, Grid, Paper } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import "./loginstyles.css";
import Loginimg from "./images.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { bake_cookie } from "sfcookies";
const useStyles = makeStyles(() => ({
  login: {
    backgroundImage: `url(${Loginimg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100vh",
    margin: 0,
  },
}));
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Login(props) {
  const history = useHistory();
  const [usrname, setUsrname] = useState("");
  const [pass, setPass] = useState("");
  const [snack, setsnack] = useState(false);
  const vertical = "bottom";
  const horizontal = "right";
  const handleclick = (e) => {
    e.preventDefault();
    axios
      .post(`https://coderun-temp.herokuapp.com/user/login/`, {
        email: usrname,
        password: pass,
      })
      .then(function (response) {
        console.log(response);
        bake_cookie("loggedin", "yes");
        bake_cookie("uid", response.data.uid);
        bake_cookie("div", response.data.div);
        bake_cookie("conteststatus", response.data.status);
        props.conteststatus(response.data.status);
        props.uid(response.data.uid);
        props.status();
        history.replace("/home");
      })
      .catch(function (error) {
        setsnack(true);
      });
  };
  const handleusr = (value) => {
    setUsrname(value);
  };
  const handlepass = (value) => {
    setPass(value);
  };
  const handleClosesnack = () => {
    setsnack(false);
  };
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <form class="box" action="index.html" method="post">
        <h1>CodeRun</h1>
        <input
          type="text"
          name=""
          placeholder="Username"
          value={usrname}
          onChange={(e) => {
            handleusr(e.target.value);
          }}
        />
        <input
          type="password"
          name=""
          placeholder="Password"
          value={pass}
          onChange={(e) => {
            handlepass(e.target.value);
          }}
        />
        <input onClick={handleclick} type="submit" name="" value="Login" />
      </form>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={snack}
        autoHideDuration={6000}
        onClose={handleClosesnack}
      >
        <Alert
          onClose={handleClosesnack}
          severity="error"
          sx={{ width: "100%" }}
        >
          Login Unsuccesful !
        </Alert>
      </Snackbar>
    </div>
  );
}
export default Login;
