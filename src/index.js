import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if(curDate>=1 && curDate <12){
  greeting = "Good Morning";
  cssStyle.color = "green";
}
else if(curDate>=12 && curDate<19){
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
}
else{
  greeting = "Good Night";
  cssStyle.color = "black";
}

const cDate = new Date().toLocaleDateString();
const cTime = new Date().toLocaleTimeString();

ReactDOM.render(
   <>
   <div>
      <h2>DATE: {cDate}    TIME:{cTime}</h2>
      <h1>Hello Buddy, <span style={cssStyle}> {greeting}</span></h1>
    </div>
   </>,
   document.getElementById('root') 
);
