import React from "react";
const App=(props)={
    return(
        <div className="avatarstyle ma4 bg-lisght-orange dib pa4">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="App"/>
        <h1 className=" ">{props.name}</h1>
        <p>{props.email}</p>
        </div>
    )
}
export default List;