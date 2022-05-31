import React from "react";
import Header from './Header.css'
import { CgMenuRound } from 'react-icons/cg';

export default ()=>{
return(
<header>
    <h1 className="header--logo">DELAS</h1>  
    <CgMenuRound className="header--menu" style={{width:50}}/>
   
</header>
);

}