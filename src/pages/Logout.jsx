import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    function logoutfn(){
        localStorage.removeItem("token");
        navigate("/");
    }
    if(!localStorage.getItem("token")){
        return (
          <h1>You are not logged in!</h1>
        )   
    } else {
        return(
            <>{logoutfn()}</>
        )
    }
}
