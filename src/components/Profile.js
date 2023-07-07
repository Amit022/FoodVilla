import React, { useState } from "react";

const ProfileFunctionalComponent=(props)=> {
    const [count,setCount]=useState(0);
    return(
     <>
        <h2>Profile Component</h2>
        <h3> Name: {props.name}</h3>
        <h3>Count : {count}</h3>
        <button onClick={()=> setCount(count+1)}>count</button>
     </>
    )
}
export default ProfileFunctionalComponent;