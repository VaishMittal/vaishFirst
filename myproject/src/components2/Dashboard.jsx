import { useState } from "react";

function Dashboard() {
  const [data,setData]=useState("")
  function fetchData(){
    fetch("https://api.github.com/users/VaishMittal")
    .then((res)=>{return res.json()})
    .then((data)=>{
      console.log(data);
      setData(data);
    });
    console.log("fetch data called")

  } 
  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <h2>{data.login}</h2>
      <h2>{data.name}</h2>
      <img src={data.avatar_url} alt="avatar"/>

      <button onClick={fetchData}>Click to see your github details</button>
      </div>
  )
}

export default Dashboard
