import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import NewCard from "./practicecard";
import axios from "axios";
import ReactPaginate from "react-paginate";

function Practiceloader(props) {
  const [arr, setArr] = useState([]);
  const [temp, setTemp] = useState([]);
  const [pagenumber, setPagenumber] = useState(0);
  const [flag, setFlag] = useState(0);
  const [pagecount, setPageCount] = useState(0);
  const usersperpage = 7;
  const pagevisited = pagenumber * usersperpage;
  var displayusers;
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    displayusers = arr.slice(pagevisited, pagevisited + usersperpage);
    setTemp(displayusers);
  }, [pagenumber]);

  async function getdata() {
    await axios
      .post(`https://coderun-temp.herokuapp.com/diagnosis/`, {
        uid: props.uid,
      })
      .then(function (response) {
        // console.log(response.data)
        setArr(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (arr.length > 0 && flag == 0) {
    // console.log(arr);
    displayusers = arr.slice(pagevisited, pagevisited + usersperpage);
    setFlag(1);
    setPageCount(Math.ceil(arr.length / usersperpage));
    setTemp(displayusers);
  }
  function markque(tosend) {
    console.log(tosend);
    axios
      .post(`https://coderun-temp.herokuapp.com/update/`, tosend)
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  function changePage({ selected }) {
    // console.log(selected);
    setPagenumber(selected);
  }
  return (
    <div>
      <Box>
        <Grid container justifyContent="center">
          {/* {temp.map((x) => {
            return (
              
              <Grid  item xs={12} sm={4} container justifyContent="center">
                <NewCard key={x.id} x={x} uid={props.uid} ts={markque} />
              </Grid>
            );
          })} */}
          <Typography>
            <h1 style={{ fontSize: "20px" }}>
              {" "}
              Practice problems will be given after 5-6 contests
            </h1>
          </Typography>
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pagecount}
            onPageChange={changePage}
            containerClassName={"paginationbttns"}
            previousLinkClassName={"prevbttn"}
            pageLinkClassName={"pagebttn"}
            nextLinkClassName={"nextbttn"}
            disabledClassName={"paginationdisabled"}
            activeClassName={"paginationActive"}
          />
        </Grid>
      </Box>
    </div>
  );
}

export default Practiceloader;
