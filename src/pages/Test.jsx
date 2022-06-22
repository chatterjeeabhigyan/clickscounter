import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {backend} from "../backendStructure.json";

export default function Test(props) {
  const [time, setTime] = useState(30);
  const [clicks, setclicks] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    document.title = `Clicks Counter`;
    const postResults = async(e) => {
      props.setLoading(true);
      await fetch(
        `${backend.URL}${backend.update.lasttest.Endpoint}/${e}`,
        {
          method: backend.update.lasttest.method,
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
          },
        }
      );
      props.setLoading(false);
      navigate("/results");
      localStorage.setItem("cps", e)
    }
    if(!props.loggedin){
      navigate("/")    
    }
    if(time===0){
      postResults(clicks/30);
    }
    return () => clearInterval(timer);
  }, [time, setTime, navigate, props]);

  function incremeantClicks() {
    setclicks(clicks + 1);
  }

  function restartTest() {
    window.location.reload();  
  }

  if(props.loggedin){
    return (
      <React.Fragment>
        <button
          style={{ height: "7em", width: "8em" }}
          onClick={incremeantClicks}
          disabled={time <= 0 ? true : false}
          className="btn btn-primary"
        >
          Click here {time <= 0 ? "[Disabled]" : ""}
        </button>
        <h2>Clicks:{clicks}</h2>
        <h2>Time left : {time <= 0 ? "0" : time}s</h2>
        <h2>
          your cps:{" "}
          {time > 0
            ? `Waiting for ${time <= 0 ? "0" : time}s`
            : clicks / 30 + "cps"}
        </h2>
        <button disabled={time <= 0 ? false : true} onClick={restartTest} className="btn btn-success">
          Restart {time <= 0 ? "" : "[Disabled]"}
        </button>
      </React.Fragment>
    );
  } else {
    return <h1>Login to continue</h1>
  }
}
