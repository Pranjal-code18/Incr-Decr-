import React, { useState } from "react";


const ToDoLists = () =>{
    const[num,setNum]=useState(0);

    const incNum = () =>{
      setNum(num+1);
    };

    const decNum = () =>{
        if(num>0){
       setNum(num-1);}
       else{
        alert("Limit exceeded");
        setNum(0);}

    };
 return(
  <>
    <div className="main_div">
     <div className="center_div">
      <h1>{num}</h1>
      <div className="btn_div">
        <button onClick={incNum}>Inc++</button>
        <button onClick={decNum}>Dec--</button>
      </div>
     </div>
    </div>
  </>
 );
};

export default ToDoLists;
