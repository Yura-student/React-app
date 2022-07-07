import React from "react";
import Books from "./Books";



export default function Years({year}) {
    return(
        <li>{year.title}
            <Books/>
        </li>
    )
}