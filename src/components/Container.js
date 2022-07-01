import React, { Component } from 'react'

import Welcome from './Welcome'
import Question from './Question'
import Thankyou from './Thankyou'
import {v4 as uuidv4} from "uuid";
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDLIo4IjQ0te8GEwds7_0WZfiWBGB0-IMY",
  authDomain: "customer-survay.firebaseapp.com",
  databaseURL: "https://customer-survay-default-rtdb.firebaseio.com",
  projectId: "customer-survay",
  storageBucket: "customer-survay.appspot.com",
  messagingSenderId: "907669047272",
  appId: "1:907669047272:web:d73c42c4bd253e0588065d"
};
if(firebase.app.length<0){
  firebase.initializeApp(firebase.Config);
}

export class Container extends Component {
  constructor(props) {
    super(props);
    console.log("hell im news component");
    this.state={
      id:uuidv4(),
      
      page:0,
      questions:{Q1:null,Q2:null,Q3:null,Q4:null,Q5:null}
    }}

    startSurvey=(event)=>{
      
      // const page = event.target.page.value;
      this.setState({});
      event.preventDefault();
      

    }
    questionssubmit=(event)=>{
      const questions={}
      questions.Q1=event.target.Q1.value;
      questions.Q2=event.target.Q2.value;
      questions.Q3=event.target.Q3.value;
      questions.Q4=event.target.Q4.value;
      questions.Q5=event.target.Q5.value;
      this.setState({questions})
      event.preventDefault();
      const database=firebase.database();
      database
      .ref("survay/"+this.state.id)
      .set({page:this.state.page,
        questions:this.state.questions

      })
    }
      

  render() {
    return (<>
      <div className="container-fluid">
        <div className="container card mt-2">
            <h1 className="text-center text-primary">Kiosk Survay</h1>
        </div>
      </div>
      <div className="container">
      <div className="my-5 mx-60" style={{height:'140rem'}}>
      <Welcome/>
      { this.state.page===null ?(
      <Welcome next={this.startSurvey}/>):(
      <Question submit={this.questionssubmit}/>)}
      
      <Thankyou/>
      </div>
     
      </div>




      </>
    )
  }
}

export default Container