import React from 'react'

export default function welcome(props) {
  return (
   <div className=" container" style={{hight:'700px'}}page={0} start={props.startSurvay}>
    <div className="card text-center" style={{ backgroundColor:'#728FCE',borderRadius:40}}>

    <div className="card-body">
      <h1 className="card-title">Customer Survey</h1></div>
      <div>
      <h2
      h2 className="text-align:right">Welcome to Kiosk</h2></div>
      <div>
      <p className="card-text my-4">You and your reviews are valuable to us.</p>
      
      {/* <div><a href="#" className="btn btn-primary"style={{backgroundColor:"#F33A6A"}} >Start</a></div> */}
      </div></div>
      </div>
  )
}
