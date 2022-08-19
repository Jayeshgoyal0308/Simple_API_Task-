import React, { useEffect, useState } from "react";
import axios from 'axios';
import DataComponent from "./dataComponent";

export default function Home() {
const [myData,setMyData] = useState([]);
const [loading,setLoading] = useState(true);
useEffect(() => {
  axios.get("http://localhost:8000/routes")
.then(res => {
  console.log(res.data);
   const newState = [...res.data];
   setMyData(newState);
   setLoading(false);
   console.log(myData);
})
},[]);

  return (
    <>
          <h3 className="text-center mt-3">Welcome, Here is the data you want to see.</h3>
          {loading!==true ? myData.map((data) => (
            <DataComponent props={data}/>
          )) : <div>Hi</div>}    
    </>

  );
}