import React from "react";
import Years from "./Years";


export default function List(props) {
    return (
        <ul>
            {props.years.map(year =>{
                return <Years year={year} key={year.id}/>
            })}
        </ul>
    )
}