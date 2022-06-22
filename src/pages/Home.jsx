import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Homepage - Clicks Counter";
    });

    function navigateToTest(){
        navigate("/test");
    }
    if(props.loggedin){
    return (
        <React.Fragment>
            <div className="center" style={{display: "grid", placeItems: "center", paddingTop:"12em"}}>
                <h3>Battle of Clicks!</h3>
                <button type="button" className="btn btn-primary btn-lg" onClick={navigateToTest}>Test ➝</button>
            </div>
        </React.Fragment>
    )
    } else {
        return (
            <React.Fragment>
            <div className="center" style={{display: "grid", placeItems: "center", paddingTop:"12em"}}>
                <h3>Battle of Clicks!</h3>
                <button type="button" className="btn btn-primary btn-lg" onClick={()=>{navigate("/login")}}>Login ➝</button>
            </div>
        </React.Fragment>
        )
    }
}
