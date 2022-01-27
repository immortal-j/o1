import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Paper,
  makeStyles,
  Typography,
  Button,
  Checkbox,
  Container,
} from "@material-ui/core";
import Barchart from "./Barchart";
import Linechart from "./Linechart";
import Doughnut from "./doughnut";
import Apexline from "./apexline";
import Heatmap from "./heatmap";
import Contest from "./contest";
import Diagtableloader from "./Diagtableload";
import Submitquestion from "./submitquestion";
import axios from "axios";
import { read_cookie, delete_cookie, bake_cookie } from "sfcookies";
const useStyles = makeStyles((theme) => ({
  charttitle: {
    textAlign: "center",
    fontWeight: 400,
    marginTop: "5%",
  },
  card: {
    minHeight: 140,
    maxWidth: "150px",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      minHeight: 190,
    },
  },
  cardtitle: {
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#8739f9",
    fontSize: 20,
    [theme.breakpoints.up("sm")]: {
      fontSize: 25,
    },
  },
  cardContent: {
    fontSize: 20,
    marginTop: 30,
    [theme.breakpoints.up("sm")]: {
      marginTop: 60,
    },
    textAlign: "center",
  },
  diagnosis: {
    fontFamily: "Inter",
    fontSize: "44px",
    fontWeight: 600,
  },
  up: {
    marginTop: "-60px",
  },
  wi: {
    border: "1px solid black",
  },
  diagheader: {
    backgroundColor: "#000",
    color: "#fff",
  },
  nodata1: {
    height: "90px",

    [theme.breakpoints.up("sm")]: {
      height: "300px",
    },
  },
  nodata2: {
    height: "90px",

    [theme.breakpoints.up("sm")]: {
      height: "304px",
    },
  },
  nodata3: {
    height: "112px",

    [theme.breakpoints.up("sm")]: {
      height: "400px",
    },
  },
}));
export default function ChartsLoader(props) {
  const [arr, setArr] = useState([]);
  const [contestdata, setContestdata] = useState(null);
  const [label1, setLabel1] = useState([]);
  const [label2, setLabel2] = useState([]);
  const [color2, setColor2] = useState([]);
  const [label3, setLabel3] = useState([]);
  const [data, setData] = useState(null);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [conteststatus, setConteststatus] = useState(false);
  useEffect(() => {
    var cs = read_cookie("conteststatus");
    setConteststatus(cs);
    if (conteststatus === false) {
      getdata();
    }
    getgraphs();
  }, []);
  const arrlen = arr.length;

  async function getgraphs() {
    await axios
      .post(`https://coderun-temp.herokuapp.com/chartdata/`, {
        uid: props.uid,
      })
      .then(function (response) {
        setConteststatus(response.data.user.status);
        delete_cookie("conteststatus");
        bake_cookie("conteststatus", response.data.user.status);
        setData(response.data);
        var arr = response.data,
          tmp1 = [],
          tmp2 = [],
          tmp3 = [];
        // console.log(arr.contest_wise);
        for (var i = 0; i < arr.contest_wise[0].length; i++) {
          // tmp1.push(arr.contest_wise[0][i]);
          tmp2.push(arr.contest_wise[0][i]);
          // tmp3.push(arr.contest_wise[2][i]);
        }
        console.log(tmp2);
        // setLabel2(tmp1);
        setData2(tmp2);
        setColor2(tmp3);
        tmp1 = [];
        tmp2 = [];
        for (const [key, value] of Object.entries(arr.rating_wise)) {
          tmp1.push(key);
        }

        tmp1.sort(function (a, b) {
          return a - b;
        });

        for (i in tmp1) {
          tmp2.push(arr.rating_wise[tmp1[i]]);
        }
        setLabel1(tmp1);
        setData1(tmp2);
        tmp1 = [];
        tmp2 = [];
        for (const [key, value] of Object.entries(arr.tag_wise)) {
          tmp1.push(key);
          tmp2.push(value);
        }
        setLabel3(tmp1);
        setData3(tmp2);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  async function getdata() {
    var div = read_cookie("div");
    await axios
      .get(`https://coderun-temp.herokuapp.com/contest/?div=${div}`)
      .then(function (response) {
        setContestdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    await axios
      .post(`https://coderun-temp.herokuapp.com/diagnosis/`, {
        uid: props.uid,
      })
      .then(function (response) {
        setArr(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function markque(tosend) {
    axios.post(`https://coderun-temp.herokuapp.com/update/`, tosend);
    getdata();
  }

  const classes = useStyles();
  var obj1 = {
    labels: label1,
    datasets: [
      {
        label: "Problems Solved",
        data: data1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  var obj2 = {
    labels: label2,
    data: data2,
    color: color2,
    datasets: [
      {
        label: "Rating",
        data: data2,
        // backgroundColor: color2,
        borderColor: ["rgba(0,0,0, 1)"],
        borderWidth: 1,
      },
    ],
  };
  var obj3 = {
    labels: label3,
    datasets: [
      {
        label: "Problems Solved",
        data: data3,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(230, 100, 192, 0.8)",
          "rgba(130, 10, 25, 0.8)",
          "rgba(200, 255, 34, 0.8)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <Container>
        {/* When contests start  IMP */}
        <Grid container xs={12} sm={12} justifyContent="center">
          {conteststatus === false && contestdata !== null ? (
            <Contest
              x={contestdata}
              uid={props.uid}
              statuschange={props.conteststatuschange}
            />
          ) : (
            <Diagtableloader
              uid={props.uid}
              arr={arr}
              arrlen={arrlen}
              mark={markque}
              data={data}
            />
          )}
        </Grid>
        {/* <Submitquestion /> */}
      </Container>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <h1 className={classes.charttitle}>Rating Wise Problems Solved</h1>
            {label1.length > 0 ? (
              <Paper elevation={3}>
                <Barchart obj={obj1} />
              </Paper>
            ) : (
              <img src="Barchart.png" className={classes.nodata1} />
            )}
          </Grid>
          <Grid item xs={12} sm={12}>
            <h1 className={classes.charttitle}>Rating Graph</h1>
            {obj2.data.length > 0 ? (
              <Paper elevation={3}>
                {/* <Linechart obj={obj2} /> */}
                <Apexline obj={obj2} />
              </Paper>
            ) : (
              <img src="Rating.png" className={classes.nodata2} />
            )}
          </Grid>
          <Grid item xs={12} sm={12}>
            <h1 className={classes.charttitle}>Tag wise Problems Solved</h1>
            {label3.length > 0 ? (
              <Paper elevation={3}>
                <Doughnut obj={obj3} />
              </Paper>
            ) : (
              <img src="Dougnut.png" className={classes.nodata3} />
            )}
          </Grid>
          <Grid item xs={12} sm={12}>
            <h1 className={classes.charttitle}>Heatmap</h1>
            {label3.length > 0 ? (
              <Paper elevation={3}>
                <Heatmap />
              </Paper>
            ) : (
              <img src="Dougnut.png" className={classes.nodata3} />
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
