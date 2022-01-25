import React, { useState, useEffect, lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core";
import Lower_Navbar from "./Navbars/lower_navabar";
import Upper_Navbar from "./Navbars/upper_navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login/login";
import { read_cookie } from "sfcookies";
import Preload from "../../preload";
const Chartsloader = lazy(() =>
  import("./Barchartsandhome/chartsLoader")
);
const Footer = lazy(() => import("./Footer/Footer"));
const Button = lazy(() => import("@material-ui/core"));
const Cardloader = lazy(() => import("./Practice/Cardloader"));
const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    backgroundColor: "#C400FF",
    marginTop: "30vh",
    marginLeft: "45vw",
    fontSize: "36px",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#f50057",
    },
  },
}));

function Loader() {
  const classes = useStyles();
  const [status, setStatus] = useState("No");
  const [conteststatus, SetConteststaus] = useState(false);
  const [uid, setUid] = useState("Null");
  useEffect(() => {
    var x = read_cookie("loggedin");
    var y = read_cookie("uid");
    if (y.length > 0) {
      setUid(y);
    }
    if (x.length === 0) {
      x = "No";
      setUid("Null");
    }
    setStatus(x);
  }, []);
  const handleLog = () => {
    setStatus("yes");
  };
  const handleLogout = () => {
    setStatus("No");
  };
  const handleUid = (x) => {
    setUid(x);
  };
  const handleUidnull = () => {
    setUid("Null");
  };
  const handleconteststatus = (status) => {
    SetConteststaus(status);
  };
  return (
    <div>
      <Route exact path="/login">
        {status === "No" || uid === "Null" ? (
          <Login
            status={handleLog}
            uid={handleUid}
            conteststatus={handleconteststatus}
          />
        ) : (
          <Redirect to="/home" />
        )}
      </Route>

      <Route exact path="/home">
        {status === "yes" && uid != "Null" ? (
          <div className="home">
            <Upper_Navbar handleLogout={handleLogout} uidnull={handleUidnull} />
            <Lower_Navbar />
            <br></br>
            <br></br>
            <br></br>
            <Suspense fallback={<Preload />}>
              <Chartsloader
                uid={uid}
                status={conteststatus}
                conteststatuschange={handleconteststatus}
              />
            </Suspense>
            <Suspense fallback={<Preload />}>
            <br/><br/><br/><br/><br/><br/>
              <Footer />
            </Suspense>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </Route>

      <Route exact path="/practice">
        {status === "yes" && uid != "Null" ? (
          <div className="home">
            <Upper_Navbar handleLogout={handleLogout} uidnull={handleUidnull} />
            <Lower_Navbar />
            <Suspense fallback={<Preload />}>
              <Cardloader uid={uid} />
            </Suspense>
            <Suspense fallback={<Preload />}>
              <Footer />
            </Suspense>
          </div>
        ) : (
          <Suspense fallback={<Preload />}>
            <Button className={classes.btn} href="/login">
              Login
            </Button>
          </Suspense>
        )}
      </Route>
    </div>
  );
}

export default Loader;
