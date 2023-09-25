import React from "react";
import "./Header.css";

type HeaderProps = {
    title : string;
}


export default function Header(props : HeaderProps){
    return (<>
    <div className="header">
        <h1>{props.title}</h1>
    </div>
    </>)
}