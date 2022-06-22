import React, { useState, useEffect } from "react";
import {backend} from "../backendStructure.json";

export default function Results(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    document.title = "Results";
    async function fetchData(){
      const response = await fetch(
        `${backend.URL}${backend.getUser.Endpoint}`,
        {
          method: backend.getUser.method,
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
          },
        }
      );
      const json = await response.json();
      setUser(json.user)
    }
    if(props.loggedin === true){
      fetchData();
    } else {
      return;
    }
  })

  if(props.loggedin){
    return <h1>Your cps: {user.lasttest}cps</h1>
  } else {
    return <h1>Login to continue</h1>
  }
}
