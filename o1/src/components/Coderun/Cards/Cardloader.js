import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import NewCard from "./newcard";
import axios from "axios";
import ReactPaginate from "react-paginate";





function Practiceloader(props) {

  const [arr, setArr] = useState([]);
  const [temp, setTemp] = useState([]);
  const [pagenumber, setPagenumber] =useState(0);
  const [flag,setFlag]=useState(0);
  const [pagecount,setPageCount]=useState(0);
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
        // console.log(response);
        setArr(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (arr.length > 0 && flag == 0) {
    displayusers = arr.slice(pagevisited, pagevisited + usersperpage);
    setFlag(1);
    setPageCount(Math.ceil(arr.length / usersperpage));
    setTemp(displayusers);
  }
  function markque(tosend) {
    // console.log(tosend);
    axios.post(`https://coderun-temp.herokuapp.com/update/`, tosend);
    getdata();
  }
  function changePage({selected}){
    console.log(selected);
    setPagenumber(selected);
  }
  return (
    <div>
      <Box>
        <Grid container justifyContent="center">
          {temp.map((x) => {
            return (
              <Grid item xs={12} sm={4} container justifyContent="center">
                <NewCard x={x} uid={props.uid} ts={markque} />
              </Grid>
            );
          })}
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
        {console.log(pagecount)}
        
      </Box>
    </div>
  );
}

export default Practiceloader;
