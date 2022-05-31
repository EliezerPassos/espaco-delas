import React from "react";
import Header from './Header.css'
import { VscMenu } from 'react-icons/vsc';

export default ()=>{
return(
<header>
    <h1 className="header--logo">ESPAÇO DELAS</h1>  
    <VscMenu className="header--menu" style={{width:30}}/>
</header>
);

}